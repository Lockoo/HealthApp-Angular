//import {Injectable} from '@angular/core';
//import {Http, Response, Headers} from '@angular/http';
//import {UsersInfo} from './UsersInfo';
//import {Observable} from 'rxjs';
//
//import 'rxjs/add/observable/throw';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';
//
//@Injectable()
//export class LoginService {
//  private userCountUrl;
//  public userCount = 0;
//  public usersInfo;
//  private headers = new Headers({'Content-type': 'application/json'});
//
//
//  constructor(private http: Http) {}
//
//  //warum erst bei 2. aufrum daten da?
//  public getUserCount(): Observable<UsersInfo> {
//    return this.http.get('http://localhost:8080/account/count', {headers: this.headers})
//      .map((res: Response) => res.json());
//   }
//
//}
