import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/store/todo/selectors';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.less']
})
export class TodoItemComponent implements OnInit {
  @Input() item: Todo;

  constructor() {}

  ngOnInit() {}
}
