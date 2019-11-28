import produce from 'immer';
import { createStore, Reducer } from 'redux';
import { WorkoutActions } from './actions';
import { get } from '../models/workout/getters';
import { selectedReducer } from './selected/reducer';
import { sessionReducer } from './session/reducer';
import { initializeState, State } from './state';

const reducer = (state: State, action: WorkoutActions) => {
  sessionReducer(state.session, action as any);
  selectedReducer(state.selected, action as any);
};

const store = createStore(produce(reducer) as Reducer<Readonly<State>, WorkoutActions>, initializeState());

export type WorkoutDispatch = typeof store.dispatch;
export const WorkoutManager = {
  store,
  get
};
