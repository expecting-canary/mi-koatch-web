import { ExerciceRunningData, ExerciceRunning } from './running';
import { ExerciceWorkoutData, ExerciceWorkout } from './workout';

export type ExerciceData = ExerciceRunningData | ExerciceWorkoutData;

export type Exercice = ExerciceRunning | ExerciceWorkout;

export type ExerciceUpdater = Partial<Exercice> & Pick<Exercice, 'id'>;

export * from './base';
export * from './running';
export * from './workout';
