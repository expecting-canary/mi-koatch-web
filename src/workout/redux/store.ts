import { StateAction } from '../actions/state';
import { produce, Draft } from 'immer';
import { createStore, Reducer } from 'redux';
import { State, initializeState } from '../models/state.type';
import { sessionReducer } from './reducers/session';

const stateReducer = produce((state: Draft<State>, action: StateAction) => {
  sessionReducer(state, action);
  // serieReducer(state, action);
  // exerciceReducer(state, action);
}) as Reducer<Readonly<State>, StateAction>;

export const store = createStore(stateReducer, initializeState());

export type StateDispatch = typeof store.dispatch;
