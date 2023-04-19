import { tap } from 'rxjs';
import { Signup, User, responseData } from './../../core/models/user.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SignupService } from 'src/app/core/services/signup.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidationControlService } from 'src/app/core/services/validation-control.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  // userName: any;
  constructor(
    private signupService: SignupService,
    private toaster: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private checkValidation: ValidationControlService
  ) {}
  signupmodel: Signup = {
    email: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    gender: '',
    password: '',
    confirmpassword: '',
    address1: 'address1',
    address2: 'address2',
    city: 'city',
    state: 'state',
    country: 'country',
    postalCode: 'postalCode',
    userName: 'userName',
    countryCode: 'countryCode',
    phoneNumber: 'phoneNumber',
  };
  responsedata?: responseData;

  Submit(Usermodel: Signup) {
    const fieldValidation = this.checkValidation.validateName(Usermodel);
    if (fieldValidation[0] !== false) {
      this.signupService.signupUser(Usermodel).subscribe((responseData) => {
        this.responsedata = responseData;
        if (this.responsedata.isSuccess == true) {
          this.toaster.success(this.responsedata.message);
        } else {
          let resp = this.responsedata.exceptionMessage;
          if (resp == '') {
            resp = this.responsedata.message;
          }
          this.toaster.error(resp || 'Something went wrong');
        }
      });
    }
    // }
    else {
      this.toaster.error('error', fieldValidation[1]);
    }
  }
}
