import { createSelector } from 'reselect';
import { State } from 'src/models';
import { structureHasState } from './util';

export function structureSelector(state: State) {
  return state.structures;
}

export const structureSelectorTodo = createSelector(structureSelector, structures =>
  structures.filter(structure => structureHasState(structure, 'TODO'))
);
export const structureSelectorOngoing = createSelector(structureSelector, structures =>
  structures.filter(structure => structureHasState(structure, 'ONGOING'))
);
export const structureSelectorDone = createSelector(structureSelector, structures =>
  structures.filter(structure => structureHasState(structure, 'DONE'))
);
