import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GestureConfig } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// import { AppComponent } from './app.component';
import { AppComponent } from './core/pages/bootstrap/app.component';
import { CoreModule } from './core/core.module';
import { HomepageModule } from './pages/homepage/homepage.module';

import { ComponentsModule } from './features/features.module';
import { StoreModule } from './store/store.module';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    StoreModule,
    GraphQLModule,
    CoreModule.forRoot(),
    HomepageModule,
  ],
  providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }],
  bootstrap: [AppComponent],
})
export class AppModule {}
