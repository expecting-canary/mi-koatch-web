import { Session, ISession, Exercice } from '../../models';

export const get = {
  exercice: {
    ongoing(session: ISession) {
      return Session.get.exercice.ongoing(session);
    },
    byId(session: ISession, id: string) {
      return Session.get.exercice.byId(session, id);
    }
  },
  serie: {
    ongoing(session: ISession) {
      const exercice = Session.get.exercice.ongoing(session);
      return exercice && Exercice.get.serie.ongoing(exercice);
    },
    byId(session: ISession, id: string) {
      return Session.get.serie.byId(session, id);
    }
  }
};
