import { EXERCICE_WORKOUT, IExerciceBase, IExerciceDataBase } from 'src/models'

export interface IExerciceWorkoutData extends IExerciceDataBase {
  type: typeof EXERCICE_WORKOUT;
  weight: number;
  repetitions: number;
}

export type IExerciceWorkout = IExerciceWorkoutData & IExerciceBase;
