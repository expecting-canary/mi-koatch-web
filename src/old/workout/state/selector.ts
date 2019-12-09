import { useSelector } from 'react-redux';
import { Workout } from 'src/workout/models';
import { State } from '../types';

export function useWorkout(): Workout;
export function useWorkout<T>(selector: (state: Workout) => T): T;
export function useWorkout<T>(selector?: (state: Workout) => T): T | Workout {
  const workout = useSelector((state: State) => state.workout);
  if (selector) return selector(workout);
  else return workout;
}

export function useWorkoutSession() {
  return useWorkout(workout => workout.$session());
}

export function useWorkoutExerciceOngoing() {
  return useWorkout(workout => workout.$ongoingExercice());
}
export function useWorkoutExerciceSelected() {
  return useWorkout(workout => workout.$exercice());
}

export function useWorkoutSerieOngoing() {
  return useWorkout(workout => workout.$ongoingSerie());
}
export function useWorkoutSerieSelected() {
  return useWorkout(workout => workout.$serie());
}
