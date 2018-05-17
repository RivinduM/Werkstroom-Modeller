import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';
import {Globals} from '../globals';
import {NavbarComponent} from '../navbar/navbar.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Object;
  name: string;
  username: string;
  email: string;
  userId: string;
  workflows: object;
  display: boolean;

  constructor(private authService: AuthService,
              private router: Router,
              private globals: Globals,) {
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
        this.user = profile.user;
        this.name = profile.user.name;
        this.username = profile.user.username;
        this.email = profile.user.email;
        this.userId = profile.user._id;
      },
      err => {
        console.log(err);
        return false;
      });

    this.authService.getWorkflows().subscribe(workflows => {
        this.workflows = workflows;
        this.display = (workflows.length > 0);
        console.log(workflows, this.display);
      },
      err => {
        console.log(err);
        return false;
      });


  }

  /**
   * @desc load workflow
   * @param workflow
   */
  open(workflow) {
    swal({
      title: 'Are you sure?',
      text: 'All unsaved changess will be lost!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, open it!'
    }).then((result) => {
      if (result.value) {
        this.globals.workflowName = workflow.name;
        this.globals.connectors = workflow.connArray;
        this.globals.compList = workflow.compArray;
        NavbarComponent.workflowName = workflow.name;
        swal({
          title: 'Loading!',
          text: 'Please wait',
          timer: 1000,
          onOpen: () => {
            swal.showLoading();
          }
        }).then((res) => {
          if (
            // Read more about handling dismissals
          res.dismiss === swal.DismissReason.timer
          ) {
            this.router.navigate(['/']);
          }
        });
      }
    });
  }

  /**
   * @desc delete workflow
   * @param workflow
   */
  delete(workflow) {
    swal({
      title: 'Are you sure?',
      text: workflow.name + ' will be deleted!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.authService.deleteWorkflow(workflow._id).subscribe(data => {
        });
        swal(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        ).then((res) => {
          this.router.navigate(['/']).then((result) => {
            this.router.navigate(['/profile']);
          });
        });
      }
    });

  }
}
