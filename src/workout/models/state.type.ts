import { ISession, initializeSession } from '../redux/managers/session';

export interface State {
  session: ISession;
  index: {
    exercice: number;
    serie: number;
  };
}

export function initializeState(): State {
  return {
    session: initializeSession(),
    index: {
      exercice: -1,
      serie: -1
    }
  };
}
