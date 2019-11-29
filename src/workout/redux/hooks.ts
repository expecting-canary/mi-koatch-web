import { useWorkoutDispatch } from './store';

function useRest() {
  const dispatch = useWorkoutDispatch();
  return () => dispatch({ type: 'NEXT' });
}

export const WorkoutHook = {
  rest: useRest
};
