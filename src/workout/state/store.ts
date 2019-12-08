import produce from 'immer';
import { createStore, Reducer } from 'redux';
import { ExerciceDB, SerieDB, SessionDB, Workout } from 'src/workout/models';
import { State } from 'src/workout/types';
import { WorkoutActions } from './actions/workout';
import { serieReducer } from './reducers/serie';
import { workoutReducer } from './reducers/workout';
import { exerciceReducer } from './reducers/exercice';

function updateDB(state: State) {
  SessionDB.set(state.session);
  ExerciceDB.set(state.exercice);
  SerieDB.set(state.serie);
}

const reducerWrapper = produce((state: State, action: WorkoutActions) => {
  updateDB(state);
  serieReducer(state.serie, action as any);
  exerciceReducer(state.exercice, action as any);
  workoutReducer(state.workout, action);
});

const reducer = (state: State, action: WorkoutActions) => {
  state = reducerWrapper(state, action);
  updateDB(state);
  return state;
};

export const store = createStore(reducer as Reducer<Readonly<State>, WorkoutActions>, {
  workout: new Workout(),
  session: SessionDB.data,
  serie: SerieDB.data,
  exercice: ExerciceDB.data
});

export type WorkoutDispatch = typeof store.dispatch;
