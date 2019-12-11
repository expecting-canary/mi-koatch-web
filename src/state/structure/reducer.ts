import { createReducer } from '@reduxjs/toolkit';
import { IStructure } from 'src/models';
import { add, find } from 'src/util/list';

import {
  structureActionAdd,
  structureActionStart,
  structureActionStop,
  structureActionUpdate,
} from './actions';
import { structureDoStart, structureDoStop, structureDoUpdate } from './handlers';

export const structuresReducer = createReducer<IStructure[]>( [], builder =>
  builder
    .addCase( structureActionAdd, ( state, { payload } ) => {
      add( state, payload );
    } )
    .addCase( structureActionStart, ( state, { payload } ) => {
      structureDoStart( find( state, payload ) );
    } )
    .addCase( structureActionStop, ( state, { payload } ) => {
      structureDoStop( find( state, payload ) );
    } )
    .addCase( structureActionUpdate, ( state, { payload } ) => {
      structureDoUpdate( find( state, payload.id ), payload.values );
    } ),
);
