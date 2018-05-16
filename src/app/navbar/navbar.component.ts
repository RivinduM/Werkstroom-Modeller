import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Globals} from '../globals';
import swal from 'sweetalert2';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  static username: string;
  static workflowName: string;

  constructor(protected authService: AuthService,
              private router: Router,
              private flashMessage: FlashMessagesService,
              private globals: Globals) {
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
        NavbarComponent.username = profile.user.name;
      },
      err => {
        console.log(err);
        return false;
      });
    NavbarComponent.workflowName = (this.globals.workflowName === undefined) ? 'untitled workflow' : this.globals.workflowName;
  }

  /**
   * @desc get current user's username
   * @returns {string}
   */
  get staticUsername() {
    return NavbarComponent.username;
  }

  /**
   * @desc get current workflow name
   * @returns {string}
   */
  get staticWorkflowname() {
    return NavbarComponent.workflowName;
  }

  /**
   * @desc logging out
   * @returns {boolean}
   */
  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('You are logged out', {
      cssClass: 'alert-success', timeout: 3000
    });
    this.router.navigate(['/login']);
    return false;
  }

  /**
   * @desc change workflow name
   * @returns {Promise<void>}
   */
  async changeName() {
    const {value: name} = await swal({
      title: 'Enter workflow name',
      input: 'text',
      inputPlaceholder: 'Enter workflow name',
      inputValue: NavbarComponent.workflowName,
      showCancelButton: true,
      inputValidator: (value) => {
        return !value && 'Please enter a name to save workflow!';
      }
    });

    if (name) {
      this.globals.workflowName = name;
      NavbarComponent.workflowName = name;
      swal({type: 'success', title: 'Done'});
    }
  }
}
