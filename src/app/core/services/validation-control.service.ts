import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Signup, responseData } from '../models/user.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class ValidationControlService {
  @ViewChild('nameInput', { static: false }) nameInput?: ElementRef;
  constructor(
    private http: HttpClient,
    private toaster: ToastrService,
    private router: Router,
    private userService: LoginService
  ) {}
  validateName(userModel: any): [boolean, string] {
    const requiredFields: string[] = [
      'firstName',
      'lastName',
      'mobileNumber',
      'gender',
      'email',
      'password',
      'confirmpassword',
    ];

    for (const field of requiredFields) {
      if (!userModel[field]) {
        return [
          false,
          `${
            field.charAt(0).toUpperCase() + field.slice(1)
          } is required. Please provide a valid value`,
        ];
      }
      if (userModel['firstName'] != '' && userModel['firstName'].length < 3) {
        return [false, `First Name should be at least 4 characters.`];
      }

      if (userModel['lastName'] != '' && userModel['lastName'].length < 3) {
        return [false, `Last Name should be at least 4 characters.`];
      }

      if (
        userModel['mobileNumber'] != '' &&
        userModel['mobileNumber'].length !== 10
      ) {
        return [false, `Mobile Number should be a 10-digit mobile number.`];
      }

      if (
        userModel['password'] != '' &&
        userModel['password'] !== userModel['confirmpassword']
      ) {
        return [false, `Password and confirm password do not match.`];
      }
    }

    return [true, ''];
  }

  private loading: boolean = false;
  setLoading(loading: boolean) {
    this.loading = loading;
  }

  getLoading(): boolean {
    return this.loading;
  }
}
