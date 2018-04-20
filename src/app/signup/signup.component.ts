import {Component, OnInit} from '@angular/core';
import {ValidateService} from '../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private validateService: ValidateService,
              private flashMessage: FlashMessagesService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSignupSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    };

    if (!this.validateService.validateRegister(user)) {
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('Successfully signed up', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      }
      else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/signup']);
      }
    });
  }
}
