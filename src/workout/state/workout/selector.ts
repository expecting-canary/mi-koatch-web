import { useSelector } from 'react-redux';
import { Workout } from 'src/workout/models';

function useSession() {
  return useSelector(Workout.get.session);
}

function useExerciceOngoing() {
  return useSelector(Workout.get.exercice.ongoing);
}
function useExerciceSelected() {
  return useSelector(Workout.get.exercice.selected);
}

function useSerieOngoing() {
  return useSelector(Workout.get.serie.ongoing);
}
function useSerieSelected() {
  return useSelector(Workout.get.serie.selected);
}

function usePath() {
  return useSelector(Workout.get.path);
}

function useDelay() {
  return useSelector(Workout.get.delay);
}

export const selector = {
  session: useSession,
  exercice: {
    ongoing: useExerciceOngoing,
    selected: useExerciceSelected
  },
  serie: {
    ongoing: useSerieOngoing,
    selected: useSerieSelected
  },
  path: usePath,
  delay: useDelay
};
