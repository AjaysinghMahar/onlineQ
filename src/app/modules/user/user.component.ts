import { User, responseData } from './../../core/models/user.model';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(
    private userService: LoginService,
    private toaster: ToastrService
  ) {}
  Usermodel: User = {
    email: '',
    password: '',
  };
  responsedata?: responseData;
  ngOnInit() {}
  Submit(Usermodel: User) {
    if (Usermodel.email != '' && Usermodel.password != '') {
      this.userService.signInUser(Usermodel).subscribe((responseData) => {
        this.responsedata = responseData;
        if (this.responsedata.isSuccess == true) {
          this.toaster.success(this.responsedata.message);
          // this.router.navigate(['/login/dashboard']);
        } else {
          this.toaster.error(this.responsedata.message);
        }
      });
    } else {
      if (!Usermodel.email) {
        this.toaster.error('error', 'Please enter Email ');
      } else if (!Usermodel.password) {
        Usermodel.email;
        this.toaster.error('error', 'Please enter Password ');
      }
    }
  }
}
