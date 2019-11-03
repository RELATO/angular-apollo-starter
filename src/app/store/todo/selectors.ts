export interface Todo {
  title: string;
}

export interface State {
  todos: Todo[];
}

export const initialState: State = {
  todos: []
};
