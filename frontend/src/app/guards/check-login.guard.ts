import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {LoginService} from '../_services/login.service'
import {Observable} from "rxjs/Observable";

@Injectable()
export class CheckLoginGuard implements CanActivate {
  check: boolean

  constructor(private router: Router, private loginService: LoginService) {

  }

  canActivate(): Observable<boolean> | boolean {
    this.check = this.loginService.IsLogged();
    if (!this.check) {
      this.router.navigate(['/login']);
    }
    return this.check;
  }
}
