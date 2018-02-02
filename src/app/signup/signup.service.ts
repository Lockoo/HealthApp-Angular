import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {User} from './user';
import {Observable} from 'rxjs';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SignupService {

  private headers = new Headers({'Content-type': 'application/json'});

  constructor(private http: Http) {}


  createUser(user: User) {
    alert(JSON.stringify(user));
    this.http.post('http://localhost:8080/account/signup', (JSON.stringify(user)), {headers: this.headers}).subscribe();
    alert('signed');
  }
}
