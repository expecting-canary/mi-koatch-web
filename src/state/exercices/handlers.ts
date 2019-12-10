import { ExerciceUpdater, Exercice } from 'src/models';

export function serieDoStart(serie: Exercice) {
  serie.state = 'ONGOING';
  serie.start = Date.now();
}
export function serieDoStop(serie: Exercice) {
  serie.state = 'DONE';
  serie.stop = Date.now();
}
export function serieDoUpdate(serie: Exercice, updater: ExerciceUpdater) {
  if (serie.id === updater.id) Object.assign(serie, updater);
}
