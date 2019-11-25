import { StateAction } from '../../actions/state';
import { State } from '../../models/state.type';
import { ISession } from '../managers/session';

export function sessionReducer(state: State, action: StateAction) {
  const session = state.session;
  switch (action.type) {
    case 'SESSION_START':
      return sessionStart(session);
    case 'SESSION_STOP':
      return sessionForceStop(session);
    case 'NEXT_SERIE':
      const exercice = getOngoingExercice(session);
      if (exercice) {
        Exercice.action.nextSerie(exercice);
        if (exercice.state === 'DONE') nextExercice(session);
      }
  }
}

function sessionStart(session: ISession) {
  session.state = 'ONGOING';
  session.start = new Date();
  nextExercice(session);
}

function sessionStop(session: ISession) {
  session.state = 'DONE';
  session.stop = new Date();
}

function sessionForceStop(session: ISession) {
  const exercice = getOngoingExercice(session);
  if (exercice) Exercice.action.stop(exercice);
  sessionStop(session);
}

function nextExercice(session: ISession) {
  const exercice = getOngoingExercice(session);
  const todo = getTodoExercice(session);

  if (exercice) Exercice.action.stop(exercice);
  if (todo) Exercice.action.start(todo);
  else sessionStop(session);
}

export function getOngoingExercice(session: ISession) {
  return session.exercices.find(exercice => exercice.state === 'ONGOING');
}
function getTodoExercice(session: ISession) {
  return session.exercices.find(exercice => exercice.state === 'TODO');
}
