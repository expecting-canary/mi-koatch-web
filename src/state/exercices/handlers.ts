import { IExercice, IExerciceUpdater } from 'src/models'

export function serieDoStart( serie: IExercice ) {
  serie.state = 'ONGOING';
  serie.start = Date.now();
}
export function serieDoStop( serie: IExercice ) {
  serie.state = 'DONE';
  serie.stop = Date.now();
}
export function serieDoUpdate( serie: IExercice, updater: IExerciceUpdater ) {
  if( serie.id === updater.id ) { Object.assign( serie, updater ); }
}
