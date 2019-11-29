import produce from 'immer';
import { useDispatch } from 'react-redux';
import { createStore, Reducer } from 'redux';
import { useStateSelector } from 'src/common/use.state.selector';
import { IWorkout, Selected, Session, Workout } from '../models';
import { WorkoutActions } from './actions';
import { sharedReducer } from './shared/reducer';

const reducer = (state: IWorkout, action: WorkoutActions) => {
  Session.reducer(state.session, action as any);
  Selected.reducer(state.selected, action as any);
  sharedReducer(state, action as any);
};

const store = createStore(produce(reducer) as Reducer<Readonly<IWorkout>, WorkoutActions>, Workout.init());

export type WorkoutDispatch = typeof store.dispatch;
export const workoutStore = store;
export const useWorkoutDispatch = (): WorkoutDispatch => useDispatch();
export const useWorkoutSelector = useStateSelector<IWorkout>();
