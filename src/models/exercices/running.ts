import { EXERCICE_RUNNING, IExerciceBase } from 'src/models';

export interface IExerciceRunningData {
  type: typeof EXERCICE_RUNNING;
  distance?: number;
  speed?: number;
}

export type IExerciceRunning = IExerciceRunningData & IExerciceBase;
