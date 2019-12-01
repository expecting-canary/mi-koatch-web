import { IExercice } from 'src/workout/types';
import { MSerie } from 'src/workout/models';

const serie = {
  ongoing(exercice: IExercice) {
    return exercice.result.find(MSerie.util.isStateBuilder('ONGOING', 'RESTING'));
  },

  byId(exercice: IExercice, id: string) {
    return exercice.result.find(serie => serie.id === id);
  }
};

export const get = {
  serie
};
