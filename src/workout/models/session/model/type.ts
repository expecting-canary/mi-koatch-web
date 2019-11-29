import { IExercice } from '../../models';

export type SessionState = 'TODO' | 'ONGOING' | 'DONE';

export interface ISession {
  id: string;
  state: SessionState;
  start: Date;
  stop: Date;
  exercices: IExercice[];
}
