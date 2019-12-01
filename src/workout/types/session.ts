import { IExercice } from 'src/workout/types';

export type SessionState = 'TODO' | 'ONGOING' | 'DONE';

export interface ISession {
  id: string;
  state: SessionState;
  start: Date;
  stop: Date;
  exercices: IExercice[];
}
