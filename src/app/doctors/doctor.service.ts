import {Doctor} from './doctor';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';


//import {Cookie} from 'ng2-cookies';

@Injectable()
export class DoctorService
{
  private doctorsUrl = 'http://localhost:8080/doc/';
  public doctors: Observable<Doctor[]>;

  constructor(private http: Http) {}

  getDoctorsBySpeciality(specialityCode: string): Observable<Doctor[]>
  {
    //    let path = '';
    //    if (specialityCode != null)
    //    {
    //      path = '/' + specialityCode;
    //    }

    let headers = new Headers({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'
    });

    this.doctors = this.http.get(this.doctorsUrl, {headers: headers})
      .map(this.extractData)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    return this.doctors;
  }


  private extractData(res: Response)
  {
    let body = res.json();
    let doctors = [];

    for (let i = 0; i < body.length; i++)
    {
      let doctor = new Doctor(body[i].firstName, body[i].lastName, body[i].email, body[i].speciality);
      doctors.push(doctor);
    }
    return doctors;
  }

}



