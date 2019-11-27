import { Exercice, ISession, Serie, Session } from '../../models';
import { Actions } from './actions';
import { get } from './getters';

export const reducer = (session: ISession, action: Actions) => {
  switch (action.type) {
    case 'SESSION_START':
      return Session.action.start(session);

    case 'SESSION_STOP':
      return Session.action.stop(session);

    case 'NEXT_SERIE':
      return Session.action.serie.next(session);

    case 'EXERCICE_UPDATE':
      const exercice = get.exercice.byId(session, action.payload.id);
      return exercice && Exercice.action.update(exercice, action.payload);

    case 'SERIE_REST': {
      const serie = get.serie.ongoing(session);
      return serie && Serie.action.rest(serie);
    }
    case 'SERIE_UPDATE': {
      const serie = get.serie.byId(session, action.payload.id);
      return serie && Serie.action.update(serie, action.payload);
    }
  }
};
