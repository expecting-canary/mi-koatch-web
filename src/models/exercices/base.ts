import { ID } from 'src/models';

export type ExerciceState = 'TODO' | 'ONGOING' | 'DONE';

export interface ExerciceBase {
  id: ID;
  state: ExerciceState;
  start: number;
  stop: number;
}
