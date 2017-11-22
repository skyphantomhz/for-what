import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {PATHSERVER} from '../_config/VariableGlobal';

@Injectable()
export class RegisterService {

  private registerUrl = PATHSERVER + 'api/account/';

  constructor(private http: Http) {
  }

  register(body: any) {
    const bodyString = JSON.stringify({
      username: body.username,
      password: body.password,
      email: body.email
    }); // Stringify payload
    let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    let options = new RequestOptions({headers: headers}); // Create a request option
    return this.http.post(this.registerUrl, bodyString, options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
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
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
