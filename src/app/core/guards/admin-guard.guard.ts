import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable, skipWhile, take, tap } from 'rxjs';

import { LoginService } from '../services/login.service';
@Injectable({
  providedIn: 'root',
})
export class AdminGuardGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.loginService.SignIn.pipe(
      skipWhile((value) => value == null),
      take(1),
      tap((authenticated) => {
        if (!authenticated) {
          this.loginService.checkUser();
        }
      })
    );
  }
}
