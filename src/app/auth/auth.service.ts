import {Login, SignupStatus, NewUser} from './login';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Router} from '@angular/router';


@Injectable()
export class AuthService
{

  public isLoggedIn: Observable<boolean>;
  public user = {name: 'Guest'};
  public redirectUrl: string;
  private observer: Observer<boolean>;
  private serverUrl = 'http://localhost:8080';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private router: Router)
  {
    this.isLoggedIn = new Observable(observer => this.observer = observer);
  }

  private checkLoginStatus(): Observable<boolean>
  {
    return this.isLoggedIn;
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

  public logout(): void
  {
    this.changeLoginStatus(true);
  }

  public changeLoginStatus(status: boolean)
  {
    if (this.observer !== undefined)
    {
      this.observer.next(status);
    }
  }
}
