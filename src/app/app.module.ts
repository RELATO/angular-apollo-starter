import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// import { AppComponent } from './app.component';
import { AppComponent } from './core/pages/bootstrap/app.component';
import { CoreModule } from './core/core.module';
import { HomepageModule } from './pages/homepage/homepage.module';

import { ComponentsModule } from './features/features.module';
import { StoreModule } from './store/store.module';
import { GraphQLModule } from './graphql.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    StoreModule,
    GraphQLModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    HomepageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
