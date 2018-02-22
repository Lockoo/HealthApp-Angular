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
  selectedDoctor: Doctor;
  firstName: string;
  doctorsCount: number;
  errorMessage: string;
  setSpeciality: string;
  error = '';

  constructor(private doctorService: DoctorService,
    private router: Router,
    private route: ActivatedRoute)
  {
    this.doctors = new Array();
    this.selectedDoctor = new Doctor('', '', '', '');
  }


  ngOnInit()
  {

  }

  onChangeFirstName()
  {
    this.doctorService.changeFirstName(this.selectedDoctor, this.firstName)
      .subscribe(doctor => this.selectedDoctor = doctor);


    //TODO den gewählten Doc reloaden // neu setzten
    for (let doctor of this.doctors)
    {
      if (doctor.email === this.selectedDoctor.email)
      {
        doctor = this.selectedDoctor;
      }
    }
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
  showDoctors()
  {
    this.doctorService.getDoctorsBySpeciality(this.setSpeciality)
      .subscribe(doctors => this.doctors = doctors,
      error => this.error = error);
  }

  //TODO
  onSelect(speciality: string)
  {
    this.setSpeciality = speciality;
    this.showDoctors();
  }

}
