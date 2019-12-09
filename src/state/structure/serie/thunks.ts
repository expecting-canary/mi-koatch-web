import { Dispatch } from 'redux';
import { Serie } from 'src/models';
import {
  createExerciceThunk,
  startStructureAction,
  stopExerciceAction,
  stopStructureAction,
  updateStructureAction
} from 'src/state';

export function startSerieThunk(serie: Serie) {
  return function(dispatch: Dispatch) {
    dispatch(startStructureAction(serie.id));
    return nextExerciceSerieThunk(serie)(dispatch);
  };
}

export function nextExerciceSerieThunk(serie: Serie) {
  return function(dispatch: Dispatch) {
    const { id, content, result, series } = serie;
    const index = result.length - 1;
    if (index >= 0) {
      dispatch(stopExerciceAction(result[index][0]));
    }
    if (result.length < series) {
      const exercice = createExerciceThunk(content)(dispatch);
      dispatch(updateStructureAction(id, { result: [...result, [exercice.id, 0]] }));
      return true;
    } else {
      return stopSerieThunk(serie)(dispatch);
    }
  };
}

export function stopSerieThunk(serie: Serie) {
  return function(dispatch: Dispatch) {
    dispatch(stopStructureAction(serie.id));
    return false;
  };
}
