import { IExercice, ExerciceType } from 'src/workout/types';
import { generateId } from 'src/common/id';

export function create(): IExercice {
  return {
    id: generateId(),
    state: 'TODO',
    type: ExerciceType.None,
    name: 'Empty',
    start: new Date(),
    stop: new Date(),
    rest: 17,
    weight: 0,
    series: 4,
    repetitions: 10,
    result: []
  };
}
