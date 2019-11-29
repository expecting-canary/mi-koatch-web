import { Exercice } from '../../models';
import { ISession } from './type';
import { selector } from './selector';

function nextSerie(session: ISession) {
  const exercice = selector.exercice.ongoing(session);
  if (exercice) {
    Exercice.operation.serie.next(exercice);
    if (exercice.state === 'DONE') nextExercice(session);
  }
}

function nextExercice(session: ISession) {
  const exercice = selector.exercice.ongoing(session);
  const todo = selector.exercice.todo(session);

  if (exercice) Exercice.operation.stop(exercice);
  if (todo) Exercice.operation.start(todo);
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
  const exercice = selector.exercice.ongoing(session);
  if (exercice) Exercice.operation.stop(exercice);
  stop(session);
}

export const operation = {
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
