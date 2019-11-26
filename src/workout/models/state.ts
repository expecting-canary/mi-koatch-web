import { ISession, Session } from './session';

export interface State {
  session: ISession;
  index: {
    exercice: number;
    serie: number;
  };
}

export function initializeState(): State {
  return {
    session: Session.init(),
    index: {
      exercice: -1,
      serie: -1
    }
  };
}
