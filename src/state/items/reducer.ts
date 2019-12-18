import { createReducer } from '@reduxjs/toolkit'
import { IItem } from 'src/types'
import { add, find, remove } from 'src/util/list'

import { itemAdd, itemDelete, itemUpdate } from './actions'
import { itemDoUpdate } from './handlers'

export const itemsReducer = createReducer<IItem[]>( [], builder =>
  builder
    .addCase( itemAdd, ( state, { payload } ) => {
      add( state, payload )
    } )
    .addCase( itemUpdate, ( state, { payload } ) => {
      typeof payload.values === 'function'
        ? payload.values( find( state, payload.id ) )
        : itemDoUpdate( find( state, payload.id ), payload.values )
    } )
    .addCase( itemDelete, ( state, { payload } ) => {
      remove( state, payload )
    } ),
)
