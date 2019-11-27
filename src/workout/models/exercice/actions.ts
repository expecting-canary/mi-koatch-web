import { IExercice, Updater } from './type';
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

  if (serie) Serie.action.stop(serie);
  if (!done) exerciceAddSerie(exercice);
  else stop(exercice);
}

function exerciceAddSerie(exercice: IExercice) {
  const todo = Serie.init(exercice);
  Serie.action.start(todo);
  exercice.result.push(todo);
}

function update(exercice: IExercice, updater: Updater) {
  Object.assign(exercice, updater);
}

export const action = {
  start,
  stop,
  update,
  serie: { next: nextSerie }
};
