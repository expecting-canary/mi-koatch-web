import { createReducer } from '@reduxjs/toolkit';
import { Exercice } from 'src/models';
import { add, find } from 'src/util/list';

import {
  exerciceActionAdd,
  exerciceActionStart,
  exerciceActionStop,
  exerciceActionUpdate,
} from './actions';
import { serieDoStart, serieDoStop, serieDoUpdate } from './handlers';

export const seriesReducer = createReducer<Exercice[]>( [], builder =>
  builder
    .addCase( exerciceActionAdd, ( state, { payload } ) => {
      add( state, payload );
    } )
    .addCase( exerciceActionStart, ( state, { payload } ) => {
      serieDoStart( find( state, payload ) );
    } )
    .addCase( exerciceActionStop, ( state, { payload } ) => {
      serieDoStop( find( state, payload ) );
    } )
    .addCase( exerciceActionUpdate, ( state, { payload } ) => {
      serieDoUpdate( find( state, payload.id ), payload.values );
    } ),
);
