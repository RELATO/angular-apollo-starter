import { createAction, props } from '@ngrx/store';

export const LOAD_TODO = '[Todo] load todo';
export const loadTodo = createAction(LOAD_TODO);

export const LOAD_TODO_SUCCESS = '[Todo] load todo success';
export const loadTodoSuccess = createAction(
  LOAD_TODO_SUCCESS,
  props<{ todos: { title: string }[] }>()
);

export const ADD_TODO = '[Todo] add todo';
export const addTodo = createAction(ADD_TODO, props<{ title: string }>());
