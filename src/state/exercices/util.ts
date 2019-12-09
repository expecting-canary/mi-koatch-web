import { Exercice, BasicExercice, ExerciceTypes } from 'src/models';
import uuid from 'uuid';

export function hasExerciceState(serie: Exercice, ...states: Exercice['state'][]) {
  return states.includes(serie.state);
}

function createExerciceBase(): BasicExercice {
  return {
    id: uuid.v4(),
    state: 'TODO',
    start: 0,
    stop: 0
  };
}

export function createExercice(data: ExerciceTypes): Exercice {
  return { ...createExerciceBase(), ...data };
}
