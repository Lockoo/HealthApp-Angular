import {Component} from '@angular/core';
import {Login, LoginStatus} from './login';
import {UsersInfo} from './UsersInfo';
import {AuthService} from './auth.service';
//import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {Observable, Observer} from 'rxjs';

@Component({
  selector: 'Login',
  templateUrl: './login.component.html'
})

//TODO Angular Material Form
export class LoginComponent
{

  alertStyle = '';
  model = new Login('', '');
  loginStatus = new LoginStatus('', '', null);
  isDoctor = false;
  public isLoggedIn: Observable<boolean>;
  private observer: Observer<boolean>;

  constructor(private authService: AuthService, private router: Router)
  {
    this.isLoggedIn = new Observable(observer => this.observer = observer);
  }


  onLogin()
  {
    this.reset();
    if (this.isDoctor)
    {
      this.authService.loginDoctor(this.model).
        subscribe((status: LoginStatus) =>
        {
          this.loginStatus = status;
        });
    }

    else
    {
      this.authService.login(this.model)
        .subscribe((status: LoginStatus) =>
        {
          this.loginStatus = status;
          //TODO navigate to loggedInComponent
        });
    }
  }

  onLogout()
  {
    this.logout();
  }

  private reset()
  {
    this.alertStyle = '';
    this.loginStatus.code = '';
    this.loginStatus.message = '';
  }

  private checkLoginStatus(): Observable<boolean>
  {
    return this.isLoggedIn;
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
