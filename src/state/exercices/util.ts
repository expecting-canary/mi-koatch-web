import { Exercice, ExerciceBase, ExerciceData } from 'src/models';
import uuid from 'uuid';

export function exerciceHasState(serie: Exercice, ...states: Exercice['state'][]) {
  return states.includes(serie.state);
}

function exerciceCreateBase(): ExerciceBase {
  return {
    id: uuid.v4(),
    state: 'TODO',
    start: 0,
    stop: 0
  };
}

export function exerciceCreate(data: ExerciceData): Exercice {
  return { ...exerciceCreateBase(), ...data };
}
