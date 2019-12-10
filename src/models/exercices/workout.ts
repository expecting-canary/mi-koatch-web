import { ExerciceBase, EXERCICE_WORKOUT } from 'src/models';

export interface ExerciceWorkoutData {
  type: typeof EXERCICE_WORKOUT;
  weight: number;
  repetitions: number;
}

export type ExerciceWorkout = ExerciceWorkoutData & ExerciceBase;
