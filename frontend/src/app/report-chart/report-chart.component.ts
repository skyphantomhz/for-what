import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-chart',
  templateUrl: './report-chart.component.html',
  styleUrls: ['./report-chart.component.css']
})
export class ReportChartComponent implements OnInit {
  // lineChart
  public lineChartData:Array<any> = [
    {data:[0, 50, 0,0, 10, 2,0, 0, 100,0, 0, 50,0, 0, 0,20, 50, 0,10, 50, 100,300, 0, 20
      ,30, 50, 10,30, 50, 100],label:'Chi tieu'},
      {data:[200, 0, 0,0, 0, 0,0, 200, 0,0, 0, 0,0, 0, 200,0, 0, 0,0, 0, 0,200, 0, 0
        ,0, 0, 0,200, 0, 10],label:'Thu nhap'}
  ];
  public lineChartLabels:Array<any> = ['1st', '2sd', '3th','4th', '5th', '6th','7th', '8th', '9th','10th', '11th', '12th',
  '13st', '14sd', '15th', '16th','17th', '18th', '19th','20th', '21th', '22th',
  '23th','24th', '25th', '26th','27th', '28th', '29th','30th'];
  public lineChartType:string = 'line';
  public lineChartLegend:boolean = true;
  public lineChartOptions:any = {
    responsive: true
  };

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jun', 'Jul'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Income'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'OutCome'}
  ];
 

  ngOnInit() {
  }

  
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
