import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponentComponent} from './homepage-component/homepage-component.component';


const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
