import { EXERCICE_RUNNING, IExerciceBase, IExerciceDataBase } from 'src/models'

export interface IExerciceRunningData extends IExerciceDataBase {
  type: typeof EXERCICE_RUNNING;
  distance?: number;
  speed?: number;
}

export type IExerciceRunning = IExerciceRunningData & IExerciceBase;
