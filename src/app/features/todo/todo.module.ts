import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { TodoPageComponent } from './todo-page/todo-page.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  declarations: [
    TodoPageComponent,
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    TodoPageComponent,
    TodoItemComponent
  ]
})
export class TodoModule { }
