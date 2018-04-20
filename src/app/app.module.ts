import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CanvasComponent} from './canvas/canvas.component';

import {InputBoxComponent} from './input-box/input-box.component';
import {InputCircleComponent} from './input-circle/input-circle.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Globals} from './globals';
import {LineComponent} from './line/line.component';
import {RouterModule} from '@angular/router';
import {HelpComponent} from './help/help.component';
import {ComponentTableComponent} from './component-table/component-table.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { ValidateService } from './services/validate.service';
import {FlashMessagesModule, FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from './services/auth.service';
import {HttpModule} from '@angular/http';
import { ProfileComponent } from './profile/profile.component';
import {AuthGuard} from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    InputBoxComponent,
    InputCircleComponent,
    LineComponent,
    HelpComponent,
    ComponentTableComponent,
    LoginComponent,
    NavbarComponent,
    AboutComponent,
    SignupComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: CanvasComponent},
      {path: 'help', component: HelpComponent},
      {path: 'components', component: ComponentTableComponent},
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'about', component: AboutComponent},
      {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
    ]),
    AngularFontAwesomeModule,
    FlashMessagesModule,
    HttpModule
  ],
  entryComponents: [InputBoxComponent, InputCircleComponent, LineComponent],
  providers: [
    Globals,
    ValidateService,
    FlashMessagesService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent/*, CanvasComponent*/],
  exports: [BrowserModule]
})
export class AppModule {
}
