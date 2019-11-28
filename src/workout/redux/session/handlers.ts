import { Exercice, IExercice, ISerie, ISession, Serie, Session } from '../../models';

export const handlers = {
  EXERCICE_UPDATE(session: ISession, update: IExercice) {
    const exercice = Session.get.exercice.byId(session, update.id);
    exercice && Exercice.action.update(exercice, update);
  },
  SERIE_REST(session: ISession) {
    const serie = Session.get.serie.ongoing(session);
    serie && Serie.action.rest(serie);
  },
  SERIE_UPDATE(session: ISession, update: ISerie) {
    const serie = Session.get.serie.byId(session, update.id);
    serie && Serie.action.update(serie, update);
  }
};
