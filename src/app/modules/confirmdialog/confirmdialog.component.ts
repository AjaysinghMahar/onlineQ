import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/core/services/login.service';
@Component({
  selector: 'app-confirmdialog',
  templateUrl: './confirmdialog.component.html',
  styleUrls: ['./confirmdialog.component.css'],
})
export class ConfirmdialogComponent implements OnInit {
  @Input() title?: string;
  @Input() message?: string;
  @Input() btnOkText?: string;
  @Input() btnCancelText?: string;

  constructor(
    private activeModal: NgbActiveModal,
    private loginService: LoginService
  ) {}

  ngOnInit() {}

  public decline() {
    this.activeModal.close(false);
  }

  public accept() {
    this.loginService.signout();
    this.activeModal.close(true);
  }

  public dismiss() {
    this.activeModal.dismiss();
  }
}
