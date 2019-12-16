import { createReducer } from '@reduxjs/toolkit'
import { IItem } from 'src/types'
import { add, find } from 'src/util/list'

import { itemAdd, itemUpdate } from './actions'
import { itemDoUpdate } from './handlers'

export const itemsReducer = createReducer<IItem[]>( [], builder =>
  builder
    .addCase( itemAdd, ( state, { payload } ) => {
      add( state, payload )
    } )
    .addCase( itemUpdate, ( state, { payload } ) => {
      itemDoUpdate( find( state, payload.id ), payload.values )
    } ),
)
