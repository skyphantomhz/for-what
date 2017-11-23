import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {PATHSERVER} from '../_config/VariableGlobal';
import {AccountUser} from '../_models/accountuser'

@Injectable()
export class AuthenticationService {

  private apiUrl = PATHSERVER + 'api/account/login/';

  public token: string;

  constructor(private http: Http) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(data: any): Observable<AccountUser> {
    const body = JSON.stringify(data);
    console.log(body);
    const headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    const options = new RequestOptions({headers: headers}); // Create a request option
    return this.http.post(this.apiUrl, body, options).map((res: Response) => res.json()).catch(this.handleError);
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('usernameId');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    // console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
