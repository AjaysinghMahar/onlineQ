import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from './core/services/login.service';
import { ConfirmationDialogService } from './core/services/confirmation-dialog.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  signedin = new BehaviorSubject(false);
  constructor(
    private loginservice: LoginService,
    private confirmationDialogService: ConfirmationDialogService
  ) {
    this.signedin = this.loginservice.SignIn;
  }
  // public openConfirmationDialog() {
  //   this.confirmationDialogService
  //     .confirm('Please confirm..', 'Do you really want to ... ?')
  //     .then((confirmed: any) => console.log('User confirmed:', confirmed))
  //     .catch(() =>
  //       console.log(
  //         'User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'
  //       )
  //     );
  // }
}
