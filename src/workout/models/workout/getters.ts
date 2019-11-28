import { Exercice, Session } from '../../models';
import { IWorkout } from './type';

export const get = {
  exercice: {
    selected(state: IWorkout) {
      const id = state.selected.id;
      return get.exercice.byId(state, id);
    },
    ongoing(state: IWorkout) {
      return Session.get.exercice.ongoing(state.session);
    },
    byId(state: IWorkout, id: string) {
      return Session.get.exercice.byId(state.session, id);
    }
  },
  serie: {
    selected(state: IWorkout) {
      const id = state.selected.id;
      return get.serie.byId(state, id);
    },
    ongoing(state: IWorkout) {
      const exercice = Session.get.exercice.ongoing(state.session);
      return exercice && Exercice.get.serie.ongoing(exercice);
    },
    byId(state: IWorkout, id: string) {
      return Session.get.serie.byId(state.session, id);
    }
  }
};
