import produce from 'immer';
import { createStore, Reducer } from 'redux';
import { WorkoutActions } from './actions';
import { selectedReducer } from './selected/reducer';
import { sessionReducer } from './session/reducer';
import { sharedReducer } from './shared/reducer';
import { initializeState, State } from './state';

const reducer = (state: State, action: WorkoutActions) => {
  sessionReducer(state.session, action as any);
  selectedReducer(state.selected, action as any);
  sharedReducer(state, action as any);
};

const store = createStore(produce(reducer) as Reducer<Readonly<State>, WorkoutActions>, initializeState());

export type WorkoutDispatch = typeof store.dispatch;
export const workoutStore = store;
