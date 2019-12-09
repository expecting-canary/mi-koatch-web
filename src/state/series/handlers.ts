import { ExerciceUpdater, Exercice } from 'src/models/serie';

export function doSerieStart(serie: Exercice) {
  serie.state = 'ONGOING';
  serie.start = Date.now();
}
export function doSerieStop(serie: Exercice) {
  serie.state = 'DONE';
  serie.stop = Date.now();
}
export function doSerieUpdate(serie: Exercice, updater: ExerciceUpdater) {
  if (serie.id === updater.id) Object.assign(serie, updater);
}
