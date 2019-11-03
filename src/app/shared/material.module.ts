import { NgModule } from '@angular/core';
import { MyErrorStateMatcher } from './form-validators/error.matcher';
import {
  ErrorStateMatcher,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSliderModule,
  MatTabsModule
} from '@angular/material';


const COMPONENTS = [
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatInputModule,
  MatFormFieldModule,
  MatTabsModule,
  MatRadioModule,
  MatSliderModule
];


@NgModule({
  imports: COMPONENTS,
  exports: COMPONENTS,
  providers: [
    {provide: ErrorStateMatcher, useClass: MyErrorStateMatcher}
  ]
})

export class MaterialModule {
}
