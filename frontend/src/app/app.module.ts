import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule,NgControl} from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReportChartComponent } from './report-chart/report-chart.component';
import { CommonModule } from '@angular/common';
import { DialogTransactionDialog } from './transaction/transaction.component';
import { HomeComponent } from './home/home.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { CustomRenderComponent } from './home/CustomRender.component';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatFormFieldControl,
  MatFormFieldModule
} from "@angular/material";
import {AppRoutingModule} from "./app-routing.module";

import {Ng2SmartTableModule} from "ng2-smart-table";
import { ReportService } from './_services/Report.Service';
import { PullDataReportComponent } from './pull-data-report/pull-data-report.component';
import { TransactionService } from './_services/Transactions.Service';



@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    LoginPageComponent,
    ReportChartComponent,
    DialogTransactionDialog,
    HomeComponent,
    PullDataReportComponent,
    CustomRenderComponent
  ],
  entryComponents: [
    DialogTransactionDialog,
    CustomRenderComponent
  ],
  imports: [
    NgxChartsModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
	  MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
  ],
  providers: [ReportService, TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
