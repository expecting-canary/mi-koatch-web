import { createReducer } from '@reduxjs/toolkit'
import { ISelected } from 'src/models'

import { selectedActionSelect } from './actions'
import { selectedDoSelect } from './handlers'

export const selectedReducer = createReducer<ISelected>( [], builder =>
  builder.addCase(
    selectedActionSelect,
    ( state, { payload } ) => selectedDoSelect( state, payload ),
  ),
)
