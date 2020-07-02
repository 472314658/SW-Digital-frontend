import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome.component';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: 'welcome', component: WelcomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home/love'
      },
      {
        path: 'home',
        component: HomeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule {
}
