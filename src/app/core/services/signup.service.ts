import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Signup, responseData } from '../models/user.model';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private url = 'http://13.90.224.87:8099/api/';
  headers = {
    headers: new HttpHeaders({
      token: '',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.userService.getToken(),
    }),
  };
  constructor(
    private http: HttpClient,
    private toaster: ToastrService,
    private router: Router,
    private userService: LoginService
  ) {}
  signupUser(signuser: Signup) {
    return this.http.post<responseData>(
      this.url + 'Candidate/RegisterUser',
      JSON.stringify(signuser),
      this.headers
    );
  }
  checkforAdmin(): boolean {
    const dataStored = localStorage.getItem('currentUser');
    if (dataStored !== null) {
      const data = JSON.parse(dataStored || '');
      const dataresponse = data.data.response;

      if (dataresponse?.userRole === 'Admin') {
        return true;
      }
    }
    return false;
  }
}
