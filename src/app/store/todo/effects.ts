import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap } from 'rxjs/operators';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from './selectors';

import * as actions from './actions';

@Injectable()
export class TodoEffects {
  constructor(private action$: Actions, private todoService: TodoService) {}

  @Effect()
  loadTodo$ = this.action$.pipe(
    ofType(actions.LOAD_TODO),
    mergeMap(() =>
      this.todoService.getAll().pipe(
        map((todos: Todo[]) => ({
          type: actions.LOAD_TODO_SUCCESS,
          todos: todos.map(todo => ({ title: todo.title })).slice(0, 12)
        })),
        catchError(err => {
          console.log(err);
          return null;
        })
      )
    )
  );
}
