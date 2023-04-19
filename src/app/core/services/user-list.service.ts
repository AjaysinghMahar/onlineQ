import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Signup, UserListResponse, responseData } from '../models/user.model';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root',
})
export class UserListService {
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
  getUserlist(pageIndex: number, pageSize: number) {
    return this.http.get<UserListResponse>(
      this.url +
        'Candidate/GetAllUsersAsync?pageIndex=' +
        pageIndex +
        '&pageSize=' +
        pageSize,
      this.headers
    );
  }
}
