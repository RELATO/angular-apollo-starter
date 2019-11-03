import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';


@NgModule({
  imports: [
    CommonModule,
    HomepageRoutingModule,

    CoreModule.forRoot()
  ],
  declarations: [
    HomepageComponent
  ]
})
export class HomepageModule {
}
