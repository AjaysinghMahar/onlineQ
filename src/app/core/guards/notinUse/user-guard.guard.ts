import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable, skipWhile, take, tap } from 'rxjs';
import { LoginService } from '../../services/login.service';
@Injectable({
  providedIn: 'root',
})
export class UserGuardGuard implements CanActivate {
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
      // if (currentUser) {
      //   this.router.navigateByUrl('/login');
      // }
      // skipWhile((value) => value == null),
      // take(1),
      tap((authenticated) => {
        if (!authenticated) {
          this.router.navigateByUrl('/login');
        } else {
          this.router.navigateByUrl('/login/dashboard');
        }
      })
      // return currentUser;
    );
  }
}
