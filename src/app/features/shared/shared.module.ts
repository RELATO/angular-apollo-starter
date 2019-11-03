import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseTemplateComponent } from './templates/base-template/base-template.component';
import { NavbarComponent } from './organisms/navbar/navbar.component';
import { FooterComponent } from './organisms/footer/footer.component';

@NgModule({
  declarations: [
    BaseTemplateComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BaseTemplateComponent
  ]
})
export class SharedModule { }
