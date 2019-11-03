import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';

import { AlgorithmsRoutingModule } from './algorithms-routing.module';
import { AlgorithmsPageComponent } from './containers/algorithms-page/algorithms-page.component';
import { MaterialModule } from '../../shared/material.module';
import { PalindromeComponent } from './components/palindrome/palindrome.component';
import { FormsModule } from '@angular/forms';
import { MissedNumberComponent } from './components/missed-number/missed-number.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlgorithmsRoutingModule,

    MaterialModule,
    CoreModule.forRoot(),
  ],
  declarations: [
    AlgorithmsPageComponent,
    PalindromeComponent,
    MissedNumberComponent
  ]
})
export class AlgorithmsModule {
}
