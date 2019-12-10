import { Dispatch } from 'redux';
import {
  ID,
  State,
  StructureData,
  STRUCTURE_ROTATION,
  STRUCTURE_SERIE,
  STRUCTURE_SESSION,
  StructureState
} from 'src/models';
import {
  structureActionAdd,
  structureActionStart,
  structureCreate,
  structureSerieThunkStart,
  structureSessionThunkStart
} from 'src/state';
import { find } from 'src/util/list';

export function structureThunkCreate(data: StructureData, start = false) {
  return function(dispatch: Dispatch, getState: () => State) {
    const structure = structureCreate(data);
    dispatch(structureActionAdd(structure));
    if (start) {
      structureThunkStart(structure.id)(dispatch, getState);
    }
    return structure;
  };
}

export function structureThunkStart(id: ID) {
  return function(dispatch: Dispatch, getState: () => State) {
    const structure = find(getState().structures, id);
    switch (structure.type) {
      case STRUCTURE_SESSION:
        return structureSessionThunkStart(structure)(dispatch, getState);
      case STRUCTURE_SERIE:
        return structureSerieThunkStart(structure)(dispatch);
      case STRUCTURE_ROTATION:
        break;
    }
  };
}

export function structureThunkNext(id: ID) {
  return function(dispatch: Dispatch, getState: () => State): StructureState {
    const structure = find(getState().structures, id);
    switch (structure.type) {
      case STRUCTURE_SESSION:
        structureSessionThunkStart(structure)(dispatch, getState);
        break;
      case STRUCTURE_SERIE:
        structureSerieThunkStart(structure)(dispatch);
        break;
      case STRUCTURE_ROTATION:
        break;
    }
    return 'TODO';
  };
}
