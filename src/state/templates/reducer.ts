import { createReducer } from '@reduxjs/toolkit'
import { IItem } from 'src/types'
import { add, find } from 'src/util/list'

import { itemAdd, itemUpdate } from './actions'

export const itemsReducer = createReducer<IItem[]>( [], builder =>
  builder
    .addCase( itemAdd, ( state, { payload } ) => { add( state, payload ) } )
    .addCase( itemUpdate, ( state, { payload } ) => {
      Object.assign( find( state, payload.id ), payload.values )
    } ),
)
