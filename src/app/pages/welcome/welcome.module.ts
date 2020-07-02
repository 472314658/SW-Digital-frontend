import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NzLayoutModule} from 'ng-zorro-antd/layout';

import {ComponentModule} from '../../shared/component.module';

import {WelcomeComponent} from './welcome.component';
import {WelcomeRoutingModule} from './welcome-routing.module';
import {NzAnchorModule, NzCardModule, NzFormModule, NzIconModule} from 'ng-zorro-antd';
import {HomeComponent} from "./home/home.component";

@NgModule({
  imports: [
    WelcomeRoutingModule,
    NzLayoutModule,
    ComponentModule,
    RouterModule,
    NzFormModule,
    NzCardModule,
    CommonModule,
    NzIconModule,
    NzAnchorModule
  ],
  declarations: [
    WelcomeComponent,
    HomeComponent,
  ],
  exports: [WelcomeComponent],
  entryComponents: [
    WelcomeComponent
  ],
  providers: [DatePipe],
})
export class WelcomeModule {
}
