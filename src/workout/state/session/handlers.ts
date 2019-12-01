import { IExercice, ISerie, ISession } from 'src/workout/types';
import { MSession, MExercice, MSerie } from 'src/workout/models';

export const handlers = {
  EXERCICE_UPDATE(session: ISession, update: IExercice) {
    const exercice = MSession.get.exercice.byId(session, update.id);
    exercice && MExercice.do.update(exercice, update);
  },
  REST(session: ISession) {
    const serie = MSession.get.serie.ongoing(session);
    serie && MSerie.do.rest(serie);
  },
  SERIE_UPDATE(session: ISession, update: ISerie) {
    const serie = MSession.get.serie.byId(session, update.id);
    serie && MSerie.do.update(serie, update);
  }
};
