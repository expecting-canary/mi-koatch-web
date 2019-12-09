import { Dispatch } from 'redux';
import { find } from 'src/util/list';
import { State, Session } from 'src/models';
import {
  startExerciceAction,
  startStructureAction,
  startStructureThunk,
  stopStructureAction
} from 'src/state';

export function startSessionThunk(session: Session) {
  return function(dispatch: Dispatch, getState: () => State) {
    dispatch(startStructureAction(session.id));
    nextInSessionThunk(session)(dispatch, getState);
  };
}

export function nextInSessionThunk(session: Session) {
  return function(dispatch: Dispatch, getState: () => State) {
    if (session.content.length) {
      const [type, id] = session.content[0];
      if (type === 'EXERCICE') {
        dispatch(startExerciceAction(id));
      } else if (type === 'STRUCTURE') {
        startStructureThunk(find(getState().structures, id))(dispatch, getState);
      }
    }
  };
}

export function stopSessionThunk(session: Session) {
  return function(dispatch: Dispatch) {
    dispatch(stopStructureAction(session.id));
    return false;
  };
}
