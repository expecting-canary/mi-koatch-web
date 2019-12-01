import { ISerie, SerieUpdater } from 'src/workout/types';

export const operation = {
  start(serie: ISerie) {
    serie.state = 'ONGOING';
    serie.start = new Date();
  },
  rest(serie: ISerie) {
    serie.state = 'RESTING';
    serie.rest = new Date();
  },
  stop(serie: ISerie) {
    serie.state = 'DONE';
    serie.stop = new Date();
  },
  update(serie: ISerie, updater: SerieUpdater) {
    Object.assign(serie, updater);
  }
};
