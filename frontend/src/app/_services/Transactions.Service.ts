import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Transaction} from '../_models/transaction';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {PATHSERVER} from "../_config/VariableGlobal";

@Injectable()
export class TransactionService {
  private transactionUrl = PATHSERVER + 'api/transactions'; // TODO take real server url

  constructor(private http: Http) {
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get(this.transactionUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getTransaction(sessionTransactionId: number): Observable<Transaction> {
    console.log(this.transactionUrl);
    return this.http.get(this.transactionUrl + `/${sessionTransactionId}`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getTransactionUrl(urlShow: string): Observable<Transaction> {
    console.log(this.transactionUrl + `/urlShow/${urlShow}`);
    return this.http.get(this.transactionUrl + `/urlShow/${urlShow}`)
      .map(res => res.json())
      .catch(this.handleError);
  }


  // getByTransaction(sessionTransactionId: number): Observable<Transaction> {
  //   return this.http.get(this.transactionUrl + /${sessionTransactionId})
  //     .map(this.extractData)
  //     .catch(this.handleError);
  // }

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