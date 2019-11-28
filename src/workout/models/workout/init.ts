import { IWorkout } from './type';
import { Session } from '../models';

export function init(): IWorkout {
  return {
    session: Session.init(),
    selected: {
      type: 'NONE',
      id: ''
    }
  };
}
