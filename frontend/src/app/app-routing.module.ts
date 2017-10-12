import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from "./login-page/login-page.component";
import { RegisterPageComponent } from "./register-page/register-page.component";

import { HomeComponent } from "./home/home.component";
import { ReportChartComponent } from "./report-chart/report-chart.component";



const routes: Routes = [

  {
    path: 'chart',
    component: ReportChartComponent
  },
  
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'homepage',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }