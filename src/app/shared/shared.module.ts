import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PhonePipe } from './pipes/phone.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterTabs } from './router-tab/router-tabs.directive';
import { RouterTab } from './router-tab/router-tab.directive';

const PIPES = [PhonePipe];

@NgModule({
  declarations: [PageNotFoundComponent, RouterTabs, RouterTab, PhonePipe],
  imports: [CommonModule, FlexLayoutModule, RouterModule],
  exports: [
    PhonePipe,
    FlexLayoutModule,
    PageNotFoundComponent,
    RouterTab,
    RouterTabs,
  ],
})
export class SharedModule {}
