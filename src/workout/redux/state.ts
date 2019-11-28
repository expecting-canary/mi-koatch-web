import { ISelected, ISession, Session } from '../models';

export interface State {
  session: ISession;
  index: {
    exercice: number;
    serie: number;
  };
  selected: ISelected;
}

export function initializeState(): State {
  return {
    session: Session.init(),
    index: {
      exercice: -1,
      serie: -1
    },
    selected: {
      type: 'NONE',
      id: ''
    }
  };
}
