import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';
import {AuthService} from './auth.service';
import {CommonModule} from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';


import {AuthRoutingModule} from './auth-app-routing.module';
import { AuthComponent } from './auth.component';
import { ForgotPasswordComponent } from './forgot-password.component';
import { LogoutComponent } from './logout.component';
import { RegistrationComponent } from './registration.component';


@NgModule({
  imports: [CommonModule, FormsModule, AuthRoutingModule, MatInputModule, BrowserAnimationsModule],
  declarations: [AuthComponent, LoginComponent,
  RegistrationComponent, ForgotPasswordComponent, LogoutComponent],
  providers: [{provide: AuthService, useClass: AuthService}
  ]
})
export class AuthModule {}

