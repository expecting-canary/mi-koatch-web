import { Workout } from 'src/workout/models/workout';
import { IWorkout, IRestTrigger } from 'src/workout/types';

export const handlers = {
  START: Workout.start,
  NEXT(workout: IWorkout) {
    Workout.next(workout);
    const trigger = workout.restTrigger;
    if (trigger.id !== undefined) clearTimeout(trigger.id);
    trigger.delay = 0;
  },
  TRIGGER_REST(workout: IWorkout, payload: IRestTrigger) {
    const trigger = workout.restTrigger;
    trigger.start = new Date();
    if (trigger.id !== undefined) clearTimeout(trigger.id);
    if (payload.delay === 0) {
      trigger.delay = 0;
    } else if (trigger.delay === payload.delay) {
      trigger.delay = 0;
      if (payload.id !== undefined) clearTimeout(payload.id);
    } else {
      trigger.id = payload.id;
      trigger.delay = payload.delay;
    }
  }
};
