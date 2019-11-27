import { ISerie, Updater } from './type';

export function start(serie: ISerie) {
  serie.state = 'ONGOING';
  serie.start = new Date();
}

export function rest(serie: ISerie) {
  serie.state = 'RESTING';
  serie.rest = new Date();
}

export function stop(serie: ISerie) {
  serie.state = 'DONE';
  serie.stop = new Date();
}

export function update(serie: ISerie, updater: Updater) {
  Object.assign(serie, updater);
}
