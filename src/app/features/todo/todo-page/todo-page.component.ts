import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { GlobalState } from 'src/app/store';
import { Todo } from 'src/app/store/todo/selectors';
import { addTodo, loadTodo } from 'src/app/store/todo/actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.less'],
})
export class TodoPageComponent implements OnInit {
  todoList$: Observable<Todo[]> = this.store.select(state => state.todo.todos);

  newTodo = '';

  constructor(private store: Store<GlobalState>) {}

  ngOnInit() {
    this.store.dispatch(loadTodo());
  }

  add() {
    this.store.dispatch(addTodo({ title: this.newTodo }));
    this.newTodo = '';
  }
}
