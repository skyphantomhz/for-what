/**
 * Created by Administrator on 10/12/2017.
 */
import {DataService} from '../service/data.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CalendarComponentComponent} from './calendar-component.component';
import {DayPilotModule} from 'daypilot-pro-angular';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    DayPilotModule,
  ],
  declarations: [
    CalendarComponentComponent
  ],
  exports:      [ CalendarComponentComponent ],
  providers:    [ DataService ]
})
export class CalendarModule { }
