import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {
  NZ_ICONS, NzAvatarModule, NzDatePickerModule,
  NzFormModule,
  NzGridModule,
  NzInputModule,
  NzLayoutModule,
  NzMenuModule, NzSelectModule,
  NzTypographyModule
} from 'ng-zorro-antd';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {SpyDirective} from './directives/spy.directive';
import {LayoutComponent} from './component/layout/layout.component';
import {LayoutMenuComponent} from './component/layout-menu/layout-menu.component';
import {MenuComponent} from './component/menu/menu.component';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {ErrorPageComponent} from './component/error-page/error-page.component';
import {LockPageComponent} from './component/lock-page/lock-page.component';
import {EntranceComponent} from './component/entrance/entrance.component';
import {NotfoundPageComponent} from './component/notfound-page/notfound-page.component';
import {OutoftimePageComponent} from './component/outoftime-page/outoftime-page.component';
import {CommonModule} from '@angular/common';
import {IconDefinition} from '@ant-design/icons-angular';

import {
  DislikeOutline,
  LikeOutline,
  StarOutline,
  DislikeFill,
  LikeFill,
  StarFill,
  DeleteOutline,
  HeartOutline,
  UnorderedListOutline,
  BankOutline,
  ReadOutline
} from '@ant-design/icons-angular/icons';

// const icons: IconDefinition[] = [
//   DislikeOutline,
//   LikeOutline,
//   StarOutline,
//   DislikeFill,
//   LikeFill,
//   StarFill,
//   DeleteOutline,
//   HeartOutline,
//   UnorderedListOutline,
//   BankOutline,
//   ReadOutline
// ];

import {scrollDirective} from './directives/scroll.directive';

import * as AllIcons from '@ant-design/icons-angular/icons';
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

@NgModule({
  declarations: [
    LayoutComponent,
    LayoutMenuComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    SpyDirective,
    ErrorPageComponent,
    LockPageComponent,
    EntranceComponent,
    NotfoundPageComponent,
    OutoftimePageComponent,
    scrollDirective
  ],
  imports: [
    RouterModule,
    NzButtonModule,
    NzMenuModule,
    NzLayoutModule,
    CommonModule,
    NzIconModule.forRoot(icons),
    NzTypographyModule,
    NzInputModule,
    NzGridModule,
    NzFormModule,
    NzAvatarModule,
    NzDatePickerModule,
    NzSelectModule
  ],
  exports: [
    LayoutComponent,
    LayoutMenuComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    SpyDirective,
    ErrorPageComponent,
    LockPageComponent,
    EntranceComponent,
    NotfoundPageComponent,
    OutoftimePageComponent,
    scrollDirective
  ],
  // providers: [{provide: NZ_ICONS, useValue: icons}],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ComponentModule {

}
