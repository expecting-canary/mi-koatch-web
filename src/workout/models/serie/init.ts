import { generateId } from '../../../common/id';
import { ISerie } from './type';
import { IExercice } from '../models';

export function init(exercice?: IExercice): ISerie {
  return {
    id: generateId(),
    state: 'TODO',
    start: new Date(),
    rest: new Date(),
    stop: new Date(),
    weight: exercice ? exercice.weight : 0,
    repetitions: exercice ? exercice.repetitions : 10
  };
}
