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
  ngOnInit(): void {
   
  }
  constructor(private reportService :ReportService) {
    this.reportService.getReportByMonth(1)
      .subscribe(
        reportByMonths => {
          this.reportByMonth = reportByMonths;
          console.log(this.reportByMonth);
        },
        error => console.log(<any>error)
      );
    this.reportService.getReportYear(1)
      .subscribe(
        reportByYear => {
          this.reportByYear = reportByYear;
          console.log(this.reportByYear);
        },
        error => console.log(<any>error)
      );
   }
}
