import { createAction } from '@reduxjs/toolkit';
import { Exercice, ExerciceUpdater } from 'src/models/exercice';
import { EXERCICE_ADD, EXERCICE_START, EXERCICE_STOP, EXERCICE_UPDATE } from '../action';

export const exerciceActionAdd = createAction(EXERCICE_ADD, (exercice: Exercice | Exercice[]) => {
  return { payload: exercice };
});
export const exerciceActionStart = createAction(EXERCICE_START, (id: Exercice['id']) => {
  return { payload: id };
});
export const exerciceActionStop = createAction(EXERCICE_STOP, (id: Exercice['id']) => {
  return { payload: id };
});
export const exerciceActionUpdate = createAction(EXERCICE_UPDATE, (id: Exercice['id'], values: ExerciceUpdater) => {
  return { payload: { id, values } };
});
