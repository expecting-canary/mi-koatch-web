import { Serie } from '../models';
import { IExercice } from './type';

const serie = {
  ongoing(exercice: IExercice) {
    return exercice.result.find(Serie.util.isStateBuilder('ONGOING', 'RESTING'));
  },

  byId(exercice: IExercice, id: string) {
    return exercice.result.find(serie => serie.id === id);
  }
};

export const get = {
  serie
};
