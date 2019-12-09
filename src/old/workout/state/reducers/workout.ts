import { reducerBuilder } from 'src/util/reducer';
import { Workout, WorkoutRestTrigger } from 'src/workout/models';
import { WorkoutActions } from '../actions/workout';

export const workoutReducer = reducerBuilder<Workout, WorkoutActions>({
  WORKOUT_START(workout: Workout) {
    workout.start();
  },
  WORKOUT_NEXT(workout: Workout) {
    workout.next();
    const trigger = workout.trigger;
    if (trigger.id !== undefined) clearTimeout(trigger.id);
    trigger.delay = 0;
  },
  SERIE_REST(workout: Workout) {
    workout.rest();
  },
  WORKOUT_TRIGGER_REST(workout: Workout, payload: WorkoutRestTrigger) {
    const trigger = workout.trigger;
    trigger.startTime = Date.now();
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
  },
  WORKOUT_SELECT_SESSION(workout: Workout, payload: string) {
    workout.selectSession(payload);
  },
  WORKOUT_SELECT_EXERCICE(workout: Workout, payload: string) {
    workout.selectExercice(payload);
  },
  WORKOUT_SELECT_SERIE(workout: Workout, payload: string) {
    workout.selectSerie(payload);
  }
});
