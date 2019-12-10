import { Dispatch } from 'redux';
import { ExerciceData } from 'src/models';
import { exerciceCreate, exerciceActionAdd, exerciceActionStart } from 'src/state';

export function exerciceThunkCreate(data: ExerciceData, start = false) {
  return function(dispatch: Dispatch) {
    const exercice = exerciceCreate(data);
    dispatch(exerciceActionAdd(exercice));
    if (start) {
      dispatch(exerciceActionStart(exercice.id));
    }
    return exercice;
  };
}
