import { ID, Progress } from 'src/models';

export interface IExerciceBase {
  id: ID;
  state: Progress;
  start: number;
  stop: number;
}
