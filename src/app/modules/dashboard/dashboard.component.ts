import { response } from './../../core/models/user.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  UserName: any;
  data = localStorage.getItem('currentUser');
  constructor(private loginService: LoginService) {
    if (this.data != null || this.data === '') {
      const parsedData = JSON.parse(this.data || '');
      const columnData = parsedData.data.response;
      this.UserName = columnData.fullName;
    }
  }
  getTokens() {
    this.loginService.getToken();
  }
  signout() {
    this.loginService.signout();
  }
}
