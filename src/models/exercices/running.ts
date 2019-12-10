import { ExerciceBase, EXERCICE_RUNNING } from 'src/models';

export interface ExerciceRunningData {
  type: typeof EXERCICE_RUNNING;
  distance?: number;
  speed?: number;
}

export type ExerciceRunning = ExerciceRunningData & ExerciceBase;
