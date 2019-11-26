/// IMPORTS

import produce, { Draft } from 'immer';
import { createStore, Reducer } from 'redux';
import { Exercice, ExerciceUpdater } from '../models/exercice';
import { Serie, SerieUpdater } from '../models/serie';
import { Session } from '../models/session';
import { initializeState, State } from '../models/state';

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
    ongoing(state: State) {
      return Session.get.exercice.ongoing(state.session);
    },
    byId(state: State, id: string) {
      return Session.get.exercice.byId(state.session, id);
    }
  },
  serie: {
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

const reducer = produce((state: Draft<State>, action: WorkoutActions) => {
  switch (action.type) {
    case 'SESSION_START':
      return Session.action.start(state.session);

    case 'SESSION_STOP':
      return Session.action.stop(state.session);

    case 'NEXT_SERIE':
      return Session.action.serie.next(state.session);

    case 'EXERCICE_UPDATE':
      const exercice = get.exercice.byId(state, action.payload.id);
      return exercice && Exercice.action.update(exercice, action.payload);

    case 'SERIE_REST': {
      const serie = get.serie.ongoing(state);
      return serie && Serie.action.rest(serie);
    }
    case 'SERIE_UPDATE': {
      const serie = get.serie.byId(state, action.payload.id);
      return serie && Serie.action.update(serie, action.payload);
    }
  }
}) as Reducer<Readonly<State>, WorkoutActions>;

const store = createStore(reducer, initializeState());

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
