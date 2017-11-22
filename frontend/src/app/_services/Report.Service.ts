import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {PATHSERVER} from "../_config/VariableGlobal";
import { ReportByMonthPOJO } from '../_models/ReportByMonthPOJO';
import { ReportInOutComePOJO } from '../_models/ReportInOutComePOJO';

@Injectable()
export class ReportService {
  private reportUrl = PATHSERVER + 'api/report'; // TODO take real server url

  constructor(private http: Http) {
  }

  getReportByMonth(id_username): Observable<string> {
    return this.http.get(this.reportUrl+`/bymonth/${id_username}`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getReportYear(id_username): Observable<string> {
    return this.http.get(this.reportUrl+`/byyear/${id_username}`)
      .map(res => res.json())
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
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