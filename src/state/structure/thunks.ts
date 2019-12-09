import { Structure, State } from 'src/models';
import { Dispatch } from 'redux';
import { startSessionThunk, startSerieThunk } from 'src/state';

export function startStructureThunk(structure: Structure) {
  return function(dispatch: Dispatch, getState: () => State) {
    switch (structure.type) {
      case 'SESSION':
        startSessionThunk(structure)(dispatch, getState);
        break;
      case 'SERIE':
        startSerieThunk(structure)(dispatch);
        break;
      case 'ROTATION':
        break;
    }
  };
}
