import { createSelector } from 'reselect';
import { State, Structure } from 'src/models';
import { find } from 'src/util/list';
import { hasStructureState } from './util';

export function structuresSelector(state: State) {
  return state.structures;
}
export function structureSelector(state: State, id: Structure['id']) {
  return find(state.structures, id);
}

export const todoStructuresSelector = createSelector(structuresSelector, structures =>
  structures.filter(structure => hasStructureState(structure, 'TODO'))
);
export const ongoingStructuresSelector = createSelector(structuresSelector, structures =>
  structures.filter(structure => hasStructureState(structure, 'ONGOING'))
);
export const doneStructuresSelector = createSelector(structuresSelector, structures =>
  structures.filter(structure => hasStructureState(structure, 'DONE'))
);
