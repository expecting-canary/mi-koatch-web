import { MExercice, MSession } from 'src/workout/models';
import { IWorkout } from 'src/workout/types';

export const get = {
  session(state: IWorkout) {
    return state.session;
  },
  exercice: {
    selected(state: IWorkout) {
      const id = state.selected.id;
      return get.exercice.byId(state, id);
    },
    ongoing(state: IWorkout) {
      return MSession.get.exercice.ongoing(state.session);
    },
    byId(state: IWorkout, id: string) {
      return MSession.get.exercice.byId(state.session, id);
    }
  },
  serie: {
    selected(state: IWorkout) {
      const id = state.selected.id;
      return get.serie.byId(state, id);
    },
    ongoing(state: IWorkout) {
      const exercice = MSession.get.exercice.ongoing(state.session);
      return exercice && MExercice.get.serie.ongoing(exercice);
    },
    byId(state: IWorkout, id: string) {
      return MSession.get.serie.byId(state.session, id);
    }
  },
  delay(state: IWorkout) {
    return state.restTrigger;
  }
};
