import { generateId } from 'src/common/id';
import { IExercice, ISerie } from 'src/workout/types';

export function create(exercice?: IExercice): ISerie {
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
