import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedcomponentComponent } from './sharedcomponent/sharedcomponent.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';
import { SpinnerComponent } from '../modules/spinner/spinner.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
@NgModule({
  declarations: [
    SharedcomponentComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SpinnerComponent,
  ],
  imports: [CommonModule, NgbModule, DataTablesModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    SharedcomponentComponent,
    SpinnerComponent,
    DataTablesModule,
  ],
  providers: [NgbActiveModal],
})
export class SharedModule {}
