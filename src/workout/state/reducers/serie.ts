import { SerieActions } from 'src/workout/state/actions/serie';
import { reducerBuilder } from 'src/common/reducer.builder';
import { Serie, SerieDB, SerieUpdater } from 'src/workout/models';

export const serieReducer = reducerBuilder<Serie[], SerieActions>({
  SERIE_UPDATE(series, payload: SerieUpdater) {
    SerieDB.get(payload.id).update(payload);
  },
  SERIE_REST(serie, id: string) {}
});
