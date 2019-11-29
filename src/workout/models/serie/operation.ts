import { ISerie, SerieUpdater } from './type';

function start(serie: ISerie) {
  serie.state = 'ONGOING';
  serie.start = new Date();
}

function rest(serie: ISerie) {
  serie.state = 'RESTING';
  serie.rest = new Date();
}

function stop(serie: ISerie) {
  serie.state = 'DONE';
  serie.stop = new Date();
}

function update(serie: ISerie, updater: SerieUpdater) {
  Object.assign(serie, updater);
}

export const operation = {
  start,
  stop,
  rest,
  update
};
