import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule,NgControl} from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {MatCheckboxModule,MatInputModule, MatButtonModule,MatFormFieldModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { ReportChartComponent } from './report-chart/report-chart.component';
import { MatNativeDateModule, MatDialogModule, MatDatepickerModule,MatSelectModule,MatFormFieldControl} from '@angular/material';
import { CommonModule } from '@angular/common';
import { DialogTransactionDialog } from './transaction/transaction.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    LoginPageComponent,
    ReportChartComponent,
    DialogTransactionDialog,
    HomeComponent
    
  ],
  entryComponents: [
    DialogTransactionDialog
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
    ChartsModule,
    CommonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
     MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
