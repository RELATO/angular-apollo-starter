import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePipe } from './pipes/phone.pipe';


const PIPES = [
  PhonePipe
];

@NgModule({
  declarations: [
    ...PIPES
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...PIPES
  ]
})
export class SharedModule {
}
