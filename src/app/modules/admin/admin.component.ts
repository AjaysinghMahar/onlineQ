import {
  User,
  UserList,
  UserListResponse,
} from './../../core/models/user.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { DataTable } from 'simple-datatables';
import { LoginService } from 'src/app/core/services/login.service';
import { UserListService } from 'src/app/core/services/user-list.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  @ViewChild('datatablesSimple', { static: false })
  datatablesSimple!: ElementRef;
  UserName: any;
  data = localStorage.getItem('currentUser');
  userlistResponse?: UserListResponse;
  userList?: any;
  dtoptions: DataTables.Settings = {};
  dttrigger: Subject<any> = new Subject<any>();
  constructor(
    private loginService: LoginService,
    private userListService: UserListService,
    private toaster: ToastrService
  ) {
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
  getUserlist() {
    this.userListService
      .getUserlist(1, 10)
      .subscribe((responsedata: UserListResponse) => {
        this.userlistResponse = responsedata;
        const errorMsg =
          responsedata?.exceptionMessage ||
          responsedata?.message ||
          'Something went wrong';
        if (this.userlistResponse.isSuccess == true) {
          this.userList = this.userlistResponse?.response;
          console.log(this.userList);
        } else {
          this.toaster.error(errorMsg);
        }
      });
  }
  ngOnInit(): void {
    this.getUserlist();
    setTimeout(() => {
      this.dtoptions = {
        pagingType: 'full_numbers',
        pageLength: 5,
        lengthMenu: [5, 10, 25],
        processing: true,
      };
    }, 3);

    // ;
  }
}
