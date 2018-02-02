import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {ModuleBlock} from 'typescript';
import {SignupService} from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private signupService: SignupService) {}

  headers = new Headers({
    'Content-Type': 'application/json'
  });

  private model = new User('', '', '', '');

  onSubmit() {
    alert(this.model.firstName + ' ' + this.model.lastName + ' ' + this.model.email + ' ' + this.model.password);
    this.createUser(this.model);
  }


  createUser(user: User)
  {
    this.signupService.createUser(user);
  }

//  createUser(user: User) {
//
//    alert(user.firstName);
//    alert(user.lastName);
//    alert(user.email);
//    alert(user.password);
//
//    this.httpClient.post<User>('http://localhost:8080/login/signup', JSON.stringify(user)).subscribe();
//    alert('user posted');
//  }



}
