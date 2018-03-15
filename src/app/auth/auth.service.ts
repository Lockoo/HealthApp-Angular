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
    withCredentials: true
  };
  authenticated = false;

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

  public authenticate(credentials, callback)
  {
    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.email + ':' + credentials.password)
    } : {});

    this.http.get('user', {headers: headers}).subscribe(response =>
    {
      if (response['name'])
      {
        this.authenticated = true;
      } else
      {
        this.authenticated = false;
      }
      return callback && callback();
    });
  }

  public loginDoctor(login: Login): Observable<SignupStatus>
  {
    const url = this.serverUrl + '/doc/login';
    return this.http.post<SignupStatus>(url, login, this.httpOptions);
  }

}
