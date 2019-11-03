import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';


export interface GlobalState {
}

export const reducers: ActionReducerMap<GlobalState> = {};

// console.log all actions
export function logger(reducer: ActionReducer<GlobalState>): ActionReducer<GlobalState> {
  return function (state: GlobalState, action: any): GlobalState {
    console.log(action, state);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<GlobalState>[] = !environment.production ? [
  // logger
] : [];
