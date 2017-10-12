import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {MatCheckboxModule,MatInputModule, MatButtonModule,MatFormFieldModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { ReportChartComponent } from './report-chart/report-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    LoginPageComponent,
    ReportChartComponent
    
  ],
  imports: [
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
