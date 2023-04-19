import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModuleRoutingModule } from '../module-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    ModuleRoutingModule,
    SharedModule,
  ],
})
export class UserModule {}
