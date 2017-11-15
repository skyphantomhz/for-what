import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ReportService } from '../_services/Report.Service';
import { ReportByMonthPOJO } from '../_models/ReportByMonthPOJO';
import { ReportInOutComePOJO } from '../_models/ReportInOutComePOJO';

@Component({
  selector: 'app-report-chart',
  templateUrl: './report-chart.component.html',
  styleUrls: ['./report-chart.component.css']
})
export class ReportChartComponent implements OnInit {

  //input
  @Input() reportByMonth: string;
  @Input() reportByYear: string;
  
  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'date of month';
  showYAxisLabel = true;
  yAxisLabel = 'Currency';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  //  constructor() {
  //    Object.assign(this, {single, multi})   
  //  }
  ngOnInit(): void {
  }
  onSelect(event) {
    console.log(event);
  }
}
