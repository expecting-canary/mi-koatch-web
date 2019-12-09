import { createSelector } from 'reselect';
import { State } from 'src/models/state';
import { hasSerieState } from './util';

export function seriesSelector(state: State) {
  return state.series;
}

export const todoSeriesSelector = createSelector(seriesSelector, series =>
  series.filter(serie => hasSerieState(serie, 'TODO'))
);
export const doneSeriesSelector = createSelector(seriesSelector, series =>
  series.filter(serie => hasSerieState(serie, 'DONE'))
);
