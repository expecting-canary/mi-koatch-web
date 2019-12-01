import { useSelector } from 'react-redux';
import { MWorkout } from 'src/workout/models';

function useSession() {
  return useSelector(MWorkout.get.session);
}

function useExerciceOngoing() {
  return useSelector(MWorkout.get.exercice.ongoing);
}
function useExerciceSelected() {
  return useSelector(MWorkout.get.exercice.selected);
}

function useSerieOngoing() {
  return useSelector(MWorkout.get.serie.ongoing);
}
function useSerieSelected() {
  return useSelector(MWorkout.get.serie.selected);
}

function useDelay() {
  return useSelector(MWorkout.get.delay);
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
  delay: useDelay
};
