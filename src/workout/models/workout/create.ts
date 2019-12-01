import { IWorkout } from 'src/workout/types';
import { MSession } from 'src/workout/models';

export function create(): IWorkout {
  return {
    session: MSession.new(),
    selected: {
      type: 'NONE',
      id: ''
    },
    restTrigger: {
      delay: 0,
      start: new Date()
    }
  };
}
