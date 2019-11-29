import { useSelector } from 'react-redux';

export function useStateSelector<S>() {
  function useWorkoutSelector(): S;
  function useWorkoutSelector<T>(selector: (state: S) => T): T;
  function useWorkoutSelector<T>(selector?: (state: S) => T | S): T | S {
    if (!selector) selector = (state: S) => state;
    return useSelector(selector);
  }
  return useWorkoutSelector;
}
