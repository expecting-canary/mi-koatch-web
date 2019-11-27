import { Exercice } from '../models';
import { ISession } from './type';
import { get } from './getters';

function nextSerie(session: ISession) {
  const exercice = get.exercice.ongoing(session);
  if (exercice) {
    Exercice.action.serie.next(exercice);
    if (exercice.state === 'DONE') nextExercice(session);
  }
}

function nextExercice(session: ISession) {
  const exercice = get.exercice.ongoing(session);
  const todo = get.exercice.todo(session);

  if (exercice) Exercice.action.stop(exercice);
  if (todo) Exercice.action.start(todo);
  else stop(session);
}

function start(session: ISession) {
  session.state = 'ONGOING';
  session.start = new Date();
  nextExercice(session);
}

function stop(session: ISession) {
  session.state = 'DONE';
  session.stop = new Date();
}

function forceStop(session: ISession) {
  const exercice = get.exercice.ongoing(session);
  if (exercice) Exercice.action.stop(exercice);
  stop(session);
}

export const action = {
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
