import { IExercice, ExerciceUpdater } from './type';
import { Serie } from '../models';
import { get } from './getters';

function start(exercice: IExercice) {
  exercice.state = 'ONGOING';
  exercice.start = new Date();
  nextSerie(exercice);
}

function stop(exercice: IExercice) {
  exercice.state = 'DONE';
  exercice.stop = new Date();
}

function nextSerie(exercice: IExercice) {
  const serie = get.serie.ongoing(exercice);
  const done = exercice.result.length === exercice.series;

  if (serie) Serie.operation.stop(serie);
  if (!done) exerciceAddSerie(exercice);
  else stop(exercice);
}

function exerciceAddSerie(exercice: IExercice) {
  const todo = Serie.init(exercice);
  Serie.operation.start(todo);
  exercice.result.push(todo);
}

function update(exercice: IExercice, updater: ExerciceUpdater) {
  Object.assign(exercice, updater);
}

export const operation = {
  start,
  stop,
  update,
  serie: { next: nextSerie }
};
