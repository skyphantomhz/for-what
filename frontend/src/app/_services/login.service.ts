import {Injectable} from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";

/**
 * Created by vtdan on 7/13/2017.
 */
@Injectable()
export class LoginService {
  public _isLoggedIn: boolean;

  IsLogged(): boolean {
    if (localStorage.getItem('currentUser')) {
      this.SetLogin(true);
    } else {
      this.SetLogin(false);
    }
    return this._isLoggedIn;
  }

  SetLogin(isLoggedIn: boolean) {
    this._isLoggedIn = isLoggedIn;
  }
}
