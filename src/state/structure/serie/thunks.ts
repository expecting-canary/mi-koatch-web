import { Dispatch } from 'redux';
import { StructureSerieData, StructureSerie } from 'src/models';
import {
  exerciceActionStop,
  exerciceThunkCreate,
  structureActionStart,
  structureActionStop,
  structureActionUpdate
} from 'src/state';

export function structureSerieThunkStart(serie: StructureSerie) {
  return function(dispatch: Dispatch) {
    dispatch(structureActionStart(serie.id));
    return structureSerieThunkNextExercice(serie)(dispatch);
  };
}

export function structureSerieThunkNextExercice(serie: StructureSerie) {
  return function(dispatch: Dispatch) {
    const { id, content, result, series } = serie;
    const index = result.length - 1;
    if (index >= 0) {
      dispatch(exerciceActionStop(result[index][0]));
    }
    if (result.length < series) {
      const exercice = exerciceThunkCreate(content)(dispatch);
      dispatch(structureActionUpdate(id, { result: [...result, [exercice.id, 0]] }));
      return true;
    } else {
      return structureSerieThunkStop(serie)(dispatch);
    }
  };
}

export function structureSerieThunkStop(serie: StructureSerie) {
  return function(dispatch: Dispatch) {
    dispatch(structureActionStop(serie.id));
    return false;
  };
}
