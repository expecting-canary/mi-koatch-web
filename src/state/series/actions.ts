import { SERIE_START, SERIE_UPDATE, SERIE_STOP, SERIE_REST, SERIE_ADD } from '../action';
import { Exercice, ExerciceUpdater } from 'src/models/serie';
import { createAction } from '@reduxjs/toolkit';

export const addSerie = createAction(SERIE_ADD, (serie: Exercice | Exercice[]) => {
  return { payload: serie };
});
export const startSerie = createAction(SERIE_START, (id: Exercice['id']) => {
  return { payload: id };
});
export const stopSerie = createAction(SERIE_STOP, (id: Exercice['id']) => {
  return { payload: id };
});
export const updateSerie = createAction(SERIE_UPDATE, (id: Exercice['id'], values: ExerciceUpdater) => {
  return { payload: { id, values } };
});
