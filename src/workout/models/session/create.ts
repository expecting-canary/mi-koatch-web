import { MExercice } from 'src/workout/models';
import { ISession } from 'src/workout/types';
import { generateId } from 'src/common/id';

export function create(): ISession {
  return {
    id: generateId(),
    state: 'TODO',
    start: new Date(),
    stop: new Date(),
    exercices: [MExercice.new(), MExercice.new()]
  };
}
