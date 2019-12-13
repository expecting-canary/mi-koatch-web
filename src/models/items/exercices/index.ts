import { IExerciceRunning, IExerciceRunningData } from './running'
import { IExerciceWorkout, IExerciceWorkoutData } from './workout'

export type IExerciceData = IExerciceRunningData | IExerciceWorkoutData;

export type IExercice = IExerciceRunning | IExerciceWorkout;

export type IExerciceUpdater = Partial<IExercice> & Pick<IExercice, 'id'>;

export * from './base';
export * from './running';
export * from './workout';
