import { Component, OnInit } from '@angular/core';
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
  username: string;

  constructor(
    protected authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private globals: Globals
  ) { }

  workflowName = (this.globals.workflowName === undefined) ? 'untitled workflow': this.globals.workflowName;

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
        this.username = profile.user.name;
      },
      err => {
        console.log(err);
        return false;
      });
  }

  onLogoutClick(){
    this.authService.logout();
    this.flashMessage.show('You are logged out', {
      cssClass: 'alert-success', timeout: 3000
    });
    this.router.navigate(['/login']);
    return false;
  }

  /*********************************************************/
  check(){
    console.log(this.authService.loggedIn())
  }

  async changeName(){
    const {value: name} = await swal({
      title: 'Enter workflow name',
      input: 'text',
      inputPlaceholder: 'Enter workflow name',
      inputValue: this.workflowName,
      showCancelButton: true,
      inputValidator: (value) => {
        return !value && 'Please enter a name to save workflow!';
      }
    });

    if (name) {
      this.globals.workflowName = name;
      this.workflowName = name;
      swal({type: 'success', title: 'Done'});
    }
  }
}
