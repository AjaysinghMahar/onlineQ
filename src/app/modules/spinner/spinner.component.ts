import { Component } from '@angular/core';
import { ValidationControlService } from 'src/app/core/services/validation-control.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent {
  constructor(public loader: ValidationControlService) {}
}
