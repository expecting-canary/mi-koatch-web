import { ExerciceActions } from 'src/workout/state/actions/exercice';
import { reducerBuilder } from 'src/common/reducer.builder';
import { Exercice, ExerciceDB, ExerciceUpdater } from 'src/workout/models';

export const exerciceReducer = reducerBuilder<Exercice[], ExerciceActions>({
  EXERCICE_UPDATE(exercices, payload: ExerciceUpdater) {
    ExerciceDB.get(payload.id).update(payload);
  }
});
