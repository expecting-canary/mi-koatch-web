import { EXERCICE_WORKOUT, IExerciceBase } from 'src/models';

export interface IExerciceWorkoutData {
  type: typeof EXERCICE_WORKOUT;
  weight: number;
  repetitions: number;
}

export type IExerciceWorkout = IExerciceWorkoutData & IExerciceBase;
