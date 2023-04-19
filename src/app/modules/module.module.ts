import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { UserComponent } from './user/user.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ConfirmdialogComponent } from './confirmdialog/confirmdialog.component';

@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    ConfirmdialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModuleRoutingModule,
    SharedModule,
  ],
})
export class ModuleModule {}
