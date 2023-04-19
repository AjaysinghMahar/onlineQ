import { Injectable } from '@angular/core';
import { User, response, responseData } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  responsedata?: responseData;
  tokenresponse?: response;
  private url = 'http://13.90.224.87:8099/api/';
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  SignIn = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private toaster: ToastrService,
    private router: Router
  ) {}
  //this will call api for sign in and  SignIn BehaviorSubject will be on so page will be loaded
  signInUser(user: User) {
    return this.http
      .post<responseData>(
        this.url + 'Login/SignIn',
        JSON.stringify(user),
        this.headers
      )
      .pipe(
        tap(() => {
          this.SignIn.next(true);
        })
      );
  }
  //this will get the generated token generated from the API while logging in
  getToken() {
    const token = localStorage.getItem('currentUser');
    if (token !== null) {
      const data = JSON.parse(token || '');
      this.tokenresponse = data.data.response;
      return this.tokenresponse?.token;
    } else {
      return null;
    }
  }
  //signout will clear local storage and SignIn BehaviorSubject will be off
  signout() {
    localStorage.clear();
    this.SignIn.next(false);
    this.router.navigate(['/login']);
    // this.SignIn.next(true);
  }
  IsLoggedIn = new BehaviorSubject(true);
  isLoggedIn(): boolean {
    const checkSignedIn = this.getToken();
    if (!checkSignedIn) {
      return false;
    } else {
      return true;
    }
  }
  checkUser(): boolean {
    const token = localStorage.getItem('currentUser');
    if (token !== null) {
      const data = JSON.parse(token || '');
      this.tokenresponse = data.data.response;

      if (this.tokenresponse?.userRole === 'Admin') {
        this.SignIn.next(true);
        this.router.navigate(['/admin']);
      } else {
        this.SignIn.next(true);
        this.router.navigate(['/login/dashboard']);
      }
      return true;
    } else {
      // this.toaster.error('error', 'Please SignIn first ');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
