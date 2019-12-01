import { MExercice } from 'src/workout/models';
import { ISession } from 'src/workout/types';
import { get } from './get';

function nextSerie(session: ISession) {
  const exercice = get.exercice.ongoing(session);
  if (exercice) {
    MExercice.do.serie.next(exercice);
    if (exercice.state === 'DONE') nextExercice(session);
  }
}

function nextExercice(session: ISession) {
  const exercice = get.exercice.ongoing(session);
  const todo = get.exercice.todo(session);

  if (exercice) MExercice.do.stop(exercice);
  if (todo) MExercice.do.start(todo);
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
  if (exercice) MExercice.do.stop(exercice);
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
