import produce from 'immer';
import { createStore, Reducer } from 'redux';
import { MWorkout } from 'src/workout/models';
import { IWorkout } from 'src/workout/types';
import { WorkoutActions } from './actions';
import { reducer } from './reducer';
import { SSession } from '../session';
import { SSelected } from '../selected';

const workoutReducer = (state: IWorkout, action: WorkoutActions) => {
  SSession.reducer(state.session, action as any);
  SSelected.reducer(state.selected, action as any);
  reducer(state, action as any);
};

export const store = createStore(
  produce(workoutReducer) as Reducer<Readonly<IWorkout>, WorkoutActions>,
  MWorkout.new()
);

export type WorkoutDispatch = typeof store.dispatch;
