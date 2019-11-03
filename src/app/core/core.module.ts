import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';

import { AppComponent } from './pages/bootstrap/app.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ForbiddenPageComponent } from './pages/forbidden-page/forbidden-page.component';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeaderComponent } from './layouts/header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseInterceptor } from '@core/interceptors/base.interceptor';


export const COMPONENTS = [
  AppComponent,

  HeaderComponent,
  MainLayoutComponent,

  NotFoundPageComponent,
  ForbiddenPageComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    MaterialModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: BaseInterceptor,
          multi: true
        },
      ],
    };
  }
}
