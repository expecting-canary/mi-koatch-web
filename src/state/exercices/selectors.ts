import { createSelector } from 'reselect';
import { Exercice, State } from 'src/models';
import { find } from 'src/util/list';
import { hasExerciceState } from './util';

export function exercicesSelector(state: State) {
  return state.exercices;
}
export function exerciceSelector(state: State, id: Exercice['id']) {
  return find(state.exercices, id);
}

export const todoSeriesSelector = createSelector(exercicesSelector, exercices =>
  exercices.filter(exercice => hasExerciceState(exercice, 'TODO'))
);
export const doneSeriesSelector = createSelector(exercicesSelector, exercices =>
  exercices.filter(exercice => hasExerciceState(exercice, 'DONE'))
);
