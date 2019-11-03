import { createReducer, on, Action } from '@ngrx/store';
import { initialState, State } from './selectors';
import { addTodo, loadTodoSuccess } from './actions';

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, action) => ({
    ...state,
    todos: [...state.todos, { title: action.title }]
  })),
  on(loadTodoSuccess, (state, action) => ({
    ...state,
    todos: action.todos
  }))
);

export default function reducer(state: State | undefined, action: Action) {
  return todoReducer(state, action);
}
