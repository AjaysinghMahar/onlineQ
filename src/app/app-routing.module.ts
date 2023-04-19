import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';
import { AdminGuardGuard } from './core/guards/admin-guard.guard';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AdminGuardGuard],
    loadChildren: () =>
      import('./modules/admin/admin.module').then((a) => a.AdminModule),
  },
  {
    path: 'user',
    canActivate: [AdminGuardGuard],
    loadChildren: () =>
      import('./modules/user/user.module').then((a) => a.UserModule),
  },
  //common module for dashboard and login page
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/module.module').then((a) => a.ModuleModule),
  },

  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
