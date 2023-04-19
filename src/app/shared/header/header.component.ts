import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/core/services/login.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogService } from 'src/app/core/services/confirmation-dialog.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private toaster: ToastrService,
    private activeModal: NgbActiveModal,
    private confirmationDialogService: ConfirmationDialogService
  ) {}
  signout(): void {
    this.toaster
      .warning('Are you sure you want to log out?', 'Confirm Logout', {
        timeOut: 5000,
        positionClass: 'toast-top-right',
      })
      .onTap.subscribe(() => {
        this.loginService.signout();
      });
    // if (window.confirm('Are you sure you want to log out?')) {

    // }
  }
  checkUser(): boolean {
    const token = localStorage.getItem('currentUser');
    if (token !== null) {
      const data = JSON.parse(token || '');
      const tokenresponse = data.data.response;

      if (tokenresponse?.userRole === 'Admin') {
        return true;
      }
    }
    return false;
  }

  ngOnInit() {}

  public openConfirmationDialog() {
    this.confirmationDialogService
      .confirm('Please confirm..', 'Do you really want to ... ?')
      .then((confirmed) => console.log('User confirmed:', confirmed))
      .catch(() =>
        console.log(
          'User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'
        )
      );
  }
}
