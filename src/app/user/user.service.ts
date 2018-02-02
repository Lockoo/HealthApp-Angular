import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

import {User} from './user';
//import { Cookie } from 'ng2-cookies';


@Injectable()
export class UserService {
  private usersUrl = 'http://localhost:8080/users';
  private headers = new Headers({
    'Content-Type':
    'application/json'
  });
  public usersCount = 0;
  public users: Observable<User[]>;

  constructor(private http: Http) {}

  // TODO ersetzen durch getUserCount
  //    getDoctorsBySpeciality(specialityCode: string): Observable<User[]> {
  //        let path = '';
  //      if (specialityCode != null) {
  //          path = '/' + specialityCode;
  //        }
  //        this.users = this.http.get(this.usersUrl + path, {headers: this.headers})
  //		.map(this.extractData)
  //		.catch(this.handleError);
  //        return this.users;
  //    }

  getUserCount() {
    const headers = new Headers({'Content-Type': 'application/json'});
    const url = `${this.usersUrl}/count`;


    return this.http.get(url, {headers: headers})
      .map((res: Response) => res.json().count)
      .catch(this.handleError);

    //return this.http.get(this.usersUrl + '/count')
    //.map((res: Response) => res.json().count)
    //.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  private extractData(res: Response) {
    const body = res.json();
    const users = [];
    for (let i = 0; i < body.users.length; i++) {
      const userInfo = body.users[i];
      const user = new User(userInfo.user.firstname,
        userInfo.user.lastname,
        userInfo.user.email,
      );

      users.push(user);
      this.usersCount++;
    }
    return users;
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''}
			${err}`;
    }
    else {
      errMsg = error.message ? error.message :
        error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
