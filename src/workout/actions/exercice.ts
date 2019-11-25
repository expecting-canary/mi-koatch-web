interface ExerciceStart {
  type: 'EXERCICE_START';
}
interface ExerciceStop {
  type: 'EXERCICE_STOP';
}
interface ExerciceUpdateWeight {
  type: 'EXERCICE_UPDATE_WEIGHT';
  payload: number;
}
interface ExerciceUpdateRepetitions {
  type: 'EXERCICE_UPDATE_REPETITIONS';
  payload: number;
}
interface ExerciceUpdateRest {
  type: 'EXERCICE_UPDATE_REST';
  payload: number;
}
interface ExerciceUpdateSeries {
  type: 'EXERCICE_UPDATE_SERIES';
  payload: number;
}
interface ExerciceStartSerie {
  type: 'EXERCICE_START_SERIE';
  payload: Serie.Type;
}

export type ExerciceActions =
  | ExerciceStart
  | ExerciceStop
  | ExerciceUpdateWeight
  | ExerciceUpdateRepetitions
  | ExerciceUpdateRest
  | ExerciceUpdateSeries
  | ExerciceStartSerie;
