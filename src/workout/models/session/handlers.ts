import { Exercice, IExercice, ISerie, ISession, Serie, Session } from '../../models';

export const handlers = {
  EXERCICE_UPDATE(session: ISession, update: IExercice) {
    const exercice = Session.selector.exercice.byId(session, update.id);
    exercice && Exercice.operation.update(exercice, update);
  },
  SERIE_REST(session: ISession) {
    const serie = Session.selector.serie.ongoing(session);
    serie && Serie.operation.rest(serie);
  },
  SERIE_UPDATE(session: ISession, update: ISerie) {
    const serie = Session.selector.serie.byId(session, update.id);
    serie && Serie.operation.update(serie, update);
  }
};
