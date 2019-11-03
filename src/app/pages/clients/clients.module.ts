import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsPageComponent } from './containers/clients-page/clients-page.component';
import { CoreModule } from '@core/core.module';
import { MaterialModule } from '../../shared/material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CLIENT_EFFECTS } from '@core/store/client/effects';
import { CLIENT_REDUCERS } from '@core/store/client/client.state';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientAddComponent } from './containers/client-add/client-add.component';
import { ClientUpdateComponent } from './containers/client-update/client-update.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { SharedModule } from '../../shared/shared.module';
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [
    ClientsPageComponent,
    ClientsListComponent,

    ClientAddComponent,
    ClientUpdateComponent,
    ClientFormComponent,
    ClientDetailsComponent
  ],
  entryComponents: [
    ClientAddComponent,
    ClientUpdateComponent,
    ClientDetailsComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    TextMaskModule,

    MaterialModule,
    SharedModule,
    CoreModule.forRoot(),

    StoreModule.forFeature('clients', CLIENT_REDUCERS),
    EffectsModule.forFeature(CLIENT_EFFECTS),
  ]
})
export class ClientsModule {
}
