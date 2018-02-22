import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {Doctor} from './doctor';
import {DoctorService} from './doctor.service';

@Component({
  selector: 'doctor-list',
  templateUrl: './doctor-list.component.html'
})
export class DoctorListComponent implements OnInit
{

  doctors: Doctor[];
  doctorsCount: number;
  errorMessage: string;
  setSpeciality: string;
  error = '';

  constructor(private doctorService: DoctorService,
    private router: Router,
    private route: ActivatedRoute)
  {
    this.doctors = new Array();
  }

  ngOnInit()
  {

  }

  showAll()
  {
    this.setSpeciality = 'All';
    //this.router.navigateByUrl('doc/' + 'list');
    this.doctorService.getAllDoctors()
      .subscribe(doctors => this.doctors = doctors,
      error =>
      {
        alert(error);
        this.router.navigateByUrl('/auth/login');
        console.error('An error occurred in retrieving doctors list, navigating to login: ', error);
      });
  }

  //TODO
  showDoctors(speciality: string)
  {
    this.doctorService.getDoctorsBySpeciality(speciality)
    .subscribe(doctors => this.doctors = doctors,
               error => this.error = error);
  }

  //TODO
  onSelect(speciality: string)
  {
    this.router.navigateByUrl('doc/' + speciality);
    this.showDoctors(speciality);
    this.setSpeciality = speciality;
  }

}
