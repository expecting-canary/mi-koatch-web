import { createSelector } from 'reselect';
import { State } from 'src/models';
import { exerciceHasState } from './util';

export function exerciceSelector(state: State) {
  return state.exercices;
}
export const todoSeriesSelector = createSelector(exerciceSelector, exercices =>
  exercices.filter(exercice => exerciceHasState(exercice, 'TODO'))
);
export const doneSeriesSelector = createSelector(exerciceSelector, exercices =>
  exercices.filter(exercice => exerciceHasState(exercice, 'DONE'))
);
