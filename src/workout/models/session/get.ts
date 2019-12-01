import { ISession } from 'src/workout/types';
import { MExercice } from 'src/workout/models'

export const get = {
  exercice: {
    ongoing(session: ISession) {
      return session.exercices.find(exercice => exercice.state === 'ONGOING');
    },
    todo(session: ISession) {
      return session.exercices.find(exercice => exercice.state === 'TODO');
    },
    byId(session: ISession, id: string) {
      return session.exercices.find(exercice => exercice.id === id);
    }
  },
  serie: {
    ongoing(session: ISession) {
      const exercice = get.exercice.ongoing(session);
      return exercice && MExercice.get.serie.ongoing(exercice);
    },
    all(session: ISession) {
      return session.exercices.map(exercice => exercice.result).reduce((array, series) => [...array, ...series], []);
    },
    byId(session: ISession, id: string) {
      return get.serie.all(session).find(exercice => exercice.id === id);
    }
  }
};
