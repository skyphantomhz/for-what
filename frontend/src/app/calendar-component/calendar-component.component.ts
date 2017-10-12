import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from "@angular/core";
import {DayPilot, DayPilotMonthComponent, DayPilotNavigatorComponent} from "daypilot-pro-angular";
import {DataService} from "../service/data.service";
@Component({
  selector: 'app-calendar-component',
  templateUrl: './calendar-component.component.html',
  styleUrls: ['./calendar-component.component.css']
})
export class CalendarComponentComponent implements OnInit, AfterViewInit {
  @ViewChild("calendar")
  calendar: DayPilotMonthComponent;
  @ViewChild("navigator")
  navigator: DayPilotNavigatorComponent;
  config: any = {
    selectMode: "month",
    startDate: DayPilot.Date.today(),
    cellHeight: 118,
  };
  navigatorConfig: any = {
    showMonths: 4,
    skipMonths: 3,
    selectMode: "month",
    startDate: "2017-10-01",
    selectionDay: "2017-10-01",
  };
  events: any[] = [];


  constructor(private ds: DataService,private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.viewChange();
  }

  viewChange() {
    let from = this.calendar.control.visibleStart();
    let to = this.calendar.control.visibleEnd();
    this.ds.getEvents(from, to).subscribe(result => {
      this.events = result;

      // this is required for getEvents() that resolves immediately (no http)
      this.cdr.detectChanges();
    });
  }

  dateChange() {
    this.config.startDate = this.navigator.control.selectionStart;
    // this.config.days = new DayPilot.Duration(this.navigator.control.selectionStart, this.navigator.control.selectionEnd).totalDays() + 1;
  }
}
