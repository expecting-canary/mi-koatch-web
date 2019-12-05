import { useDispatch } from 'react-redux';
import { ExerciceUpdater, SerieUpdater } from 'src/workout/types';
import { WorkoutDispatch } from './store';
import { useCallback } from 'react';

const useWorkoutDispatch: () => WorkoutDispatch = useDispatch;

function useStart() {
  const dispatch = useWorkoutDispatch();
  return useCallback(() => dispatch({ type: 'START' }), [dispatch]);
}
function useRest() {
  const dispatch = useWorkoutDispatch();
  return useCallback(() => dispatch({ type: 'REST' }), [dispatch]);
}
function useNext(delay = 0) {
  const dispatch = useWorkoutDispatch();
  return useCallback(() => (delay ? delayedDispatch(dispatch, delay) : dispatch({ type: 'NEXT' })), [dispatch, delay]);
}
function delayedDispatch(dispatch: WorkoutDispatch, delay: number) {
  const id = setTimeout(() => {
    dispatch({ type: 'NEXT' });
  }, delay * 1000);
  dispatch({ type: 'TRIGGER_REST', payload: { id, delay } });
}

function useUpdateExercice() {
  const dispatch = useWorkoutDispatch();
  return useCallback((exercice: ExerciceUpdater) => dispatch({ type: 'EXERCICE_UPDATE', payload: exercice }), [
    dispatch
  ]);
}
function useUpdateSerie() {
  const dispatch = useWorkoutDispatch();
  return useCallback((serie: SerieUpdater) => dispatch({ type: 'SERIE_UPDATE', payload: serie }), [dispatch]);
}
function useSelectSession() {
  const dispatch = useWorkoutDispatch();
  return useCallback((id: string) => dispatch({ type: 'SELECT_SESSION', payload: id }), [dispatch]);
}
function useSelectExercice() {
  const dispatch = useWorkoutDispatch();
  return useCallback((id: string) => dispatch({ type: 'SELECT_EXERCICE', payload: id }), [dispatch]);
}
function useSelectSerie() {
  const dispatch = useWorkoutDispatch();
  return useCallback((id: string) => dispatch({ type: 'SELECT_SERIE', payload: id }), [dispatch]);
}

export const dispatch = {
  start: useStart,
  next: useNext,
  rest: useRest,
  update: {
    exercice: useUpdateExercice,
    serie: useUpdateSerie
  },
  select: {
    session: useSelectSession,
    exercice: useSelectExercice,
    serie: useSelectSerie
  }
};
