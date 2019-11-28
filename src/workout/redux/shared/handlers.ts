import { Workout } from 'src/workout/models/workout/wrapper';

export const handlers = {
  START: Workout.action.start,
  NEXT: Workout.action.next
};
