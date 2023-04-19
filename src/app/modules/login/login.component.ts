import { User, responseData } from './../../core/models/user.model';
import { Component } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private userService: LoginService,
    private toaster: ToastrService
  ) {
    this.userService.checkUser();
  }
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
          localStorage.setItem(
            'currentUser',
            JSON.stringify({ data: this.responsedata })
          );
          this.userService.checkUser();
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
