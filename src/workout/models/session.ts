/// IMPORTS

import { IExercice, Exercice } from './exercice';
import { generateId } from '../../common/id';

///

/// TYPES

type State = 'TODO' | 'ONGOING' | 'DONE';

interface Session {
  id: string;
  state: State;
  start: Date;
  stop: Date;
  exercices: IExercice[];
}

///

/// INIT

function init(): Session {
  return {
    id: generateId(),
    state: 'TODO',
    start: new Date(),
    stop: new Date(),
    exercices: [Exercice.init(), Exercice.init()]
  };
}

///

/// ACTIONS

function nextSerie(session: Session) {
  const exercice = get.exercice.ongoing(session);
  if (exercice) {
    Exercice.action.nextSerie(exercice);
    if (exercice.state === 'DONE') nextExercice(session);
  }
}

function nextExercice(session: Session) {
  const exercice = get.exercice.ongoing(session);
  const todo = get.exercice.todo(session);

  if (exercice) Exercice.action.stop(exercice);
  if (todo) Exercice.action.start(todo);
  else stop(session);
}

function start(session: Session) {
  session.state = 'ONGOING';
  session.start = new Date();
  nextExercice(session);
}

function stop(session: Session) {
  session.state = 'DONE';
  session.stop = new Date();
}

function forceStop(session: Session) {
  const exercice = get.exercice.ongoing(session);
  if (exercice) Exercice.action.stop(exercice);
  stop(session);
}

const action = {
  start,
  stop,
  forceStop,
  serie: {
    next: nextSerie
  },
  exercice: {
    next: nextExercice
  }
};

///

/// GETTERS

const get = {
  exercice: {
    ongoing(session: Session) {
      return session.exercices.find(exercice => exercice.state === 'ONGOING');
    },

    todo(session: Session) {
      return session.exercices.find(exercice => exercice.state === 'TODO');
    },

    byId(session: Session, id: string) {
      return session.exercices.find(exercice => exercice.id === id);
    }
  },
  serie: {
    all(session: Session) {
      return session.exercices.map(exercice => exercice.result).reduce((array, series) => [...array, ...series], []);
    },

    byId(session: Session, id: string) {
      return get.serie.all(session).find(exercice => exercice.id === id);
    }
  }
};

///

/// WRAPPER

const Session = {
  init,
  action,
  get
};

///

/// EXPORTS

export { Session };
export type ISession = Session;
export type SessionState = State;

///
