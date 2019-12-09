import produce from 'immer';
import { applyMiddleware, createStore, Reducer } from 'redux';
import thunk from 'redux-thunk';
import { ExerciceDB, SerieDB, SessionDB, Workout } from 'src/workout/models';
import { State } from 'src/workout/types';
import { WorkoutActions } from './actions/workout';
import { exerciceReducer } from './reducers/exercice';
import { serieReducer } from './reducers/serie';
import { workoutReducer } from './reducers/workout';

function updateDB(state: State) {
  SessionDB.set(state.session);
  ExerciceDB.set(state.exercice);
}

const reducerWrapper = produce((state: State, action: WorkoutActions) => {
  updateDB(state);
  exerciceReducer(state.exercice, action as any);
  workoutReducer(state.workout, action);
});

const reducer = (state: State, action: WorkoutActions) => {
  serieReducer(state.serie, action as any);
  state = reducerWrapper(state, action);
  updateDB(state);
  return state;
};

export const store = createStore(
  reducer as Reducer<Readonly<State>, WorkoutActions>,
  {
    workout: new Workout(),
    session: SessionDB.data,
    serie: SerieDB.data,
    exercice: ExerciceDB.data
  },
  applyMiddleware(thunk)
);

export type WorkoutDispatch = typeof store.dispatch;
