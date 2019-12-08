import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { WorkoutDispatch } from '../state/store';

const useWorkoutDispatch: () => WorkoutDispatch = useDispatch;

export function useWorkoutStart() {
  const dispatch = useWorkoutDispatch();
  return useCallback(() => dispatch({ type: 'WORKOUT_START' }), [dispatch]);
}
export function useWorkoutRest() {
  const dispatch = useWorkoutDispatch();
  return useCallback(() => dispatch({ type: 'WORKOUT_REST' }), [dispatch]);
}
export function useWorkoutNext() {
  const dispatch = useWorkoutDispatch();
  return useCallback(
    (delay = 0) => (delay ? delayedDispatch(dispatch, delay) : dispatch({ type: 'WORKOUT_NEXT' })),
    [dispatch]
  );
}
function delayedDispatch(dispatch: WorkoutDispatch, delay: number) {
  const id = setTimeout(() => {
    dispatch({ type: 'WORKOUT_NEXT' });
  }, delay * 1000);
  dispatch({ type: 'WORKOUT_TRIGGER_REST', payload: { id, delay } });
}
/*
function useUpdateExercice() {
  const dispatch = useWorkoutDispatch();
  return useCallback(
    (exercice: ExerciceUpdater) => dispatch({ type: 'EXERCICE_UPDATE', payload: exercice }),
    [dispatch]
  );
}
function useUpdateSerie() {
  const dispatch = useWorkoutDispatch();
  return useCallback((serie: SerieUpdater) => dispatch({ type: 'SERIE_UPDATE', payload: serie }), [
    dispatch
  ]);
}*/
export function useWorkoutSelectSession() {
  const dispatch = useWorkoutDispatch();
  return useCallback((id: string) => dispatch({ type: 'WORKOUT_SELECT_SESSION', payload: id }), [
    dispatch
  ]);
}
export function useWorkoutSelectExercice() {
  const dispatch = useWorkoutDispatch();
  return useCallback((id: string) => dispatch({ type: 'WORKOUT_SELECT_EXERCICE', payload: id }), [
    dispatch
  ]);
}
export function useWorkoutSelectSerie() {
  const dispatch = useWorkoutDispatch();
  return useCallback((id: string) => dispatch({ type: 'WORKOUT_SELECT_SERIE', payload: id }), [
    dispatch
  ]);
}
