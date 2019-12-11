import { IExerciceRunning, IExerciceRunningData } from './running';
import { IExerciceWorkout, IExerciceWorkoutData } from './workout';

export type ExerciceData = IExerciceRunningData | IExerciceWorkoutData;

export type Exercice = IExerciceRunning | IExerciceWorkout;

export type ExerciceUpdater = Partial<Exercice> & Pick<Exercice, 'id'>;

export * from './base';
export * from './running';
export * from './workout';
