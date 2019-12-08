import constate from 'constate';
import {
  useWorkoutNext,
  useWorkoutRest,
  useWorkoutSelectExercice,
  useWorkoutSelectSerie,
  useWorkoutSelectSession,
  useWorkoutStart
} from '../dispatch/dispatch';
import { useWorkout } from '../state/selector';

function useWorkoutContextBuilder() {
  const workout = useWorkout();
  const select = {
    session: useWorkoutSelectSession(),
    exercice: useWorkoutSelectExercice(),
    serie: useWorkoutSelectSerie()
  };
  const selected = {
    session: workout.$session(),
    exercice: workout.$exercice(),
    serie: workout.$serie()
  };
  const ongoing = {
    exercice: workout.$ongoingExercice(),
    serie: workout.$ongoingSerie()
  };
  const start = useWorkoutStart();
  const next = useWorkoutNext();
  const rest = useWorkoutRest();
  const trigger = workout.trigger;
  return { workout, select, selected, ongoing, start, next, rest, trigger };
}

export const [WorkoutContextProvider, useWorkoutContext] = constate(useWorkoutContextBuilder);
