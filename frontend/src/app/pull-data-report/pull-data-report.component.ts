import { Component, OnInit } from '@angular/core';
import { ReportService } from '../_services/Report.Service';
import { ReportByMonthPOJO } from '../_models/ReportByMonthPOJO';

@Component({
  selector: 'app-pull-data-report',
  templateUrl: './pull-data-report.component.html',
  styleUrls: ['./pull-data-report.component.css']
})
export class PullDataReportComponent implements OnInit {
  reportByMonth: string;
  reportByYear: string;
  checklenght: boolean;
  ngOnInit(): void {
   
  }
  constructor(private reportService :ReportService) {
    this.checklenght=false;
    let userId = parseInt(localStorage.getItem('usernameId'));
    this.reportService.getReportByMonth(userId)
      .subscribe(
        reportByMonths => {
          this.reportByMonth = reportByMonths;
          console.log(this.reportByMonth);
        },
        error => console.log(<any>error)
      );
    this.reportService.getReportYear(userId)
      .subscribe(
        reportByYear => {
          this.reportByYear = reportByYear;
          console.log(this.reportByYear);
        },
        error => console.log(<any>error)
      );
   }
}
