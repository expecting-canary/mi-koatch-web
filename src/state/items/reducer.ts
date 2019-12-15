import { createReducer } from '@reduxjs/toolkit'
import { IItem } from 'src/models'
import { add, find } from 'src/util/list'

import {
  itemActionAdd,
  itemActionStart,
  itemActionStop,
  itemActionUpdate,
} from './actions'
import { itemDoStart, itemDoStop, itemDoUpdate } from './handlers'

export const itemsReducer = createReducer<IItem[]>( [], builder =>
  builder
    .addCase( itemActionAdd, ( state, { payload } ) => {
      add( state, payload )
    } )
    .addCase( itemActionStart, ( state, { payload } ) => {
      itemDoStart( find( state, payload ) )
    } )
    .addCase( itemActionStop, ( state, { payload } ) => {
      itemDoStop( find( state, payload ) )
    } )
    .addCase( itemActionUpdate, ( state, { payload } ) => {
      itemDoUpdate( find( state, payload.id ), payload.values )
    } ),
)
