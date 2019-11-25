interface SerieStart {
  type: 'SERIE_START';
}
interface SerieStop {
  type: 'SERIE_STOP';
}
interface SerieRest {
  type: 'SERIE_REST';
}
interface SerieUpdateWeight {
  type: 'SERIE_UPDATE_WEIGHT';
  payload: number;
}
interface SerieUpdateRepetitions {
  type: 'SERIE_UPDATE_REPETITIONS';
  payload: number;
}

export type SerieActions = SerieStart | SerieStop | SerieRest | SerieUpdateWeight | SerieUpdateRepetitions;
