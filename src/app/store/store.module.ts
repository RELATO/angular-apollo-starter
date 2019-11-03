import { NgModule } from '@angular/core';

import * as NgRx from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import {
  NgrxCacheModule,
  NgrxCache,
} from 'apollo-angular-cache-ngrx';

import { reducers, metaReducers } from '.';
import { TodoEffects } from './todo/effects';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    NgRx.StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([TodoEffects]),
    StoreRouterConnectingModule.forRoot(),
    NgrxCacheModule
  ]
})
export class StoreModule {
  constructor(ngrxCache: NgrxCache) {
    const cache = ngrxCache.create({});
  }
}
