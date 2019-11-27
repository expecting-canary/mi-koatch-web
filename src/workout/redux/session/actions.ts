import { ExerciceUpdater, SerieUpdater } from '../../models';

interface SessionStart {
  type: 'SESSION_START';
}

interface SessionStop {
  type: 'SESSION_STOP';
}

interface NextSerie {
  type: 'NEXT_SERIE';
}

interface ExerciceUpdate {
  type: 'EXERCICE_UPDATE';
  payload: ExerciceUpdater;
}

interface SerieUpdate {
  type: 'SERIE_UPDATE';
  payload: SerieUpdater;
}

interface SerieRest {
  type: 'SERIE_REST';
}

export type Actions = SessionStart | SessionStop | NextSerie | ExerciceUpdate | SerieUpdate | SerieRest;
