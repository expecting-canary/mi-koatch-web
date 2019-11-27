import { IExercice } from '../models';

export type State = 'TODO' | 'ONGOING' | 'DONE';

export interface ISession {
  id: string;
  state: State;
  start: Date;
  stop: Date;
  exercices: IExercice[];
}
