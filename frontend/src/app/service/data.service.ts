/**
 * Created by Administrator on 10/12/2017.
 */
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import "rxjs/Rx";
import {DayPilot} from "daypilot-pro-angular";

@Injectable()
export class DataService {

  events: any[] = [
    {
      id: "1",
      start: "2017-11-12",
      end: "2017-11-12",
      text: "Buy Ruler-10000"
    },
    {
      id: "2",
      start: "2017-10-12",
      end: "2017-10-12",
      text: "Buy Erasers-10000"
    },
    {
      id: "3",
      start: "2017-10-12",
      end: "2017-10-12",
      text: "Buy Pencils-10000"
    },
    {
      id: "4",
      start: "2017-10-11",
      end: "2017-10-11",
      text: "Buy Cakes-10000"
    },
    {
      id: "5",
      start: "2017-10-14",
      end: "2017-10-14",
      text: "Buy Candies-10000"
    },
    {
      id: "6",
      start: "2017-10-13",
      end: "2017-10-13",
      text: "Buy Clothes-10000"
    },{
      id: "7",
      start: "2017-10-10",
      end: "2017-10-10",
      text: "Buy Pens-10000"
    },
    {
      id: "8",
      start: "2017-10-12",
      end: "2017-10-12",
      text: "Buy Books-10000"
    },
  ];

  constructor(private http: Http) {
  }

  getEvents(from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {

    // simulating an HTTP request
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.events);
      }, 200);
    });

    // return this.http.get("/api/events?from=" + from.toString() + "&to=" + to.toString()).map((response:Response) => response.json());
  }

}
