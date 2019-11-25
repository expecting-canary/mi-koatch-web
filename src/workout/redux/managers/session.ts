import { IExercice } from '../../models/exercice.type';

export type SessionState = 'TODO' | 'ONGOING' | 'DONE';

export interface ISession {
  state: SessionState;
  start: Date;
  stop: Date;
  exercices: IExercice[];
}

export function initializeSession(): ISession {
  return {
    state: 'TODO',
    start: new Date(),
    stop: new Date(),
    exercices: [Exercice.init(), Exercice.init()]
  };
}
