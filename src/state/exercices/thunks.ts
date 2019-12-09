import { Dispatch } from 'redux';
import { ExerciceTypes } from 'src/models';
import { addExerciceAction, createExercice, startExerciceAction } from 'src/state';

export function createExerciceThunk(data: ExerciceTypes) {
  return function(dispatch: Dispatch) {
    const exercice = createExercice(data);
    dispatch(addExerciceAction(exercice));
    dispatch(startExerciceAction(exercice.id));
    return exercice;
  };
}
