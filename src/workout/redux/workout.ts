/// IMPORTS

import produce from 'immer';
import { createStore, Reducer } from 'redux';
import { Exercice, ExerciceUpdater } from '../models/exercice/wrapper';
import { SerieUpdater } from '../models/models';
import { Session } from '../models';
import { initializeState, State } from '../models/state';
import { Selected } from './selected';
import { SessionRedux } from './session/wrapper';

///

/// ACTIONS

interface SessionStart {
  type: 'SESSION_START';
}

interface SessionStop {
  type: 'SESSION_STOP';
}

interface NextSerie {
  type: 'NEXT_SERIE';
}

interface ExerciceUpdate {
  type: 'EXERCICE_UPDATE';
  payload: ExerciceUpdater;
}

interface SerieUpdate {
  type: 'SERIE_UPDATE';
  payload: SerieUpdater;
}

interface SerieRest {
  type: 'SERIE_REST';
}

type WorkoutActions = SessionStart | SessionStop | NextSerie | ExerciceUpdate | SerieUpdate | SerieRest;

///

/// GETTERS

const get = {
  exercice: {
    selected(state: State) {
      const id = state.selected.id;
      return get.exercice.byId(state, id);
    },
    ongoing(state: State) {
      return Session.get.exercice.ongoing(state.session);
    },
    byId(state: State, id: string) {
      return Session.get.exercice.byId(state.session, id);
    }
  },
  serie: {
    selected(state: State) {
      const id = state.selected.id;
      return get.serie.byId(state, id);
    },
    ongoing(state: State) {
      const exercice = Session.get.exercice.ongoing(state.session);
      return exercice && Exercice.get.serie.ongoing(exercice);
    },
    byId(state: State, id: string) {
      return Session.get.serie.byId(state.session, id);
    }
  }
};

///

/// STORE

const reducer = (state: State, action: WorkoutActions) => {
  SessionRedux.reducer(state.session, action);
  Selected.reducer(state.selected, action as any);
};

const store = createStore(produce(reducer) as Reducer<Readonly<State>, WorkoutActions>, initializeState());

type Dispatch = typeof store.dispatch;

///

/// WRAPPER

const Workout = {
  store,
  get
};

///

/// EXPORTS

export { Workout };
export type WorkoutDispatch = Dispatch;

///
