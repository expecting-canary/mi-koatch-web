import { createReducer } from '@reduxjs/toolkit';
import { Exercice } from 'src/models/exercice';
import { add, find } from 'src/util/list';
import { addSerie, startSerie, stopSerie, updateSerie } from './actions';
import { doSerieStart, doSerieStop, doSerieUpdate } from './handlers';

export const seriesReducer = createReducer<Exercice[]>([], builder =>
  builder
    .addCase(addSerie, (state, { payload }) => {
      add(state, payload);
    })
    .addCase(startSerie, (state, { payload }) => {
      doSerieStart(find(state, payload));
    })
    .addCase(stopSerie, (state, { payload }) => {
      doSerieStop(find(state, payload));
    })
    .addCase(updateSerie, (state, { payload }) => {
      doSerieUpdate(find(state, payload.id), payload.values);
    })
);
