import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
/*const Workflow = require('../../../models/workflow');*/

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

  constructor(private authService: AuthService,
              private router: Router) {
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

   /* Workflow.getWorkflowsByUserID(this.userId, (err, workflow) => {
      if (err) {
        throw err;
      }
      if (!workflow) {
        console.log('User not found');
      }
      else {
        console.log(workflow);
      }
    });*/


  }
}
