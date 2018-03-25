import {Login, SignupStatus, NewUser} from './login';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';


@Injectable()
export class AuthService
{
  public user = {name: 'Guest'};
  public redirectUrl: string;
  private serverUrl = 'http://localhost:8080';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient, private router: Router)
  {
  }

  public signup(newUser: NewUser): Observable<SignupStatus>
  {
    const url = this.serverUrl + '/account/signup';
    return this.http.post<SignupStatus>(url, newUser, this.httpOptions);
  }

  public login(login: Login): Observable<SignupStatus>
  {
    const url = this.serverUrl + '/account/login';
    return this.http.post<SignupStatus>(url, login, this.httpOptions);
  }

  public loginDoctor(login: Login): Observable<SignupStatus>
  {
    const url = this.serverUrl + '/doc/login';
    return this.http.post<SignupStatus>(url, login, this.httpOptions);
  }

}
