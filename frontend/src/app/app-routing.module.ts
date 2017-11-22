import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

import { HomeComponent } from './home/home.component';
import { ReportChartComponent } from './report-chart/report-chart.component';
import {CheckLoginGuard} from './guards/check-login.guard';



const routes: Routes = [

  {
    path: 'chart',
    component: ReportChartComponent, canActivate: [CheckLoginGuard]
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
    component: HomeComponent, canActivate: [CheckLoginGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
