import { createDBReducer } from 'src/util/reducer';
import { SerieDB, SerieUpdater, Serie } from 'src/workout/models';
import { SerieActions } from 'src/workout/state/actions/serie';

export const serieReducer = createDBReducer<Serie, SerieActions>(SerieDB, {
  SERIE_UPDATE(db, updater: SerieUpdater) {
    db.get(updater.id).update(updater);
  },
  SERIE_START(db, id: string) {
    db.get(id).rest();
  },
  SERIE_REST(db, id: string) {
    db.get(id).rest();
  },
  SERIE_STOP(db, id: string) {
    db.get(id).rest();
  }
});
