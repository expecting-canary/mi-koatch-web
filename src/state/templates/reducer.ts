import { createReducer } from '@reduxjs/toolkit'
import { ITemplate } from 'src/models'
import { add, find } from 'src/util/list'

import { templateActionAdd, templateActionUpdate } from './actions'
import { templateDoUpdate } from './handlers'

export const templatesReducer = createReducer<ITemplate[]>( [], builder =>
  builder
    .addCase( templateActionAdd, ( state, { payload } ) => {
      add( state, payload )
    } )
    .addCase( templateActionUpdate, ( state, { payload } ) => {
      templateDoUpdate( find( state, payload.id ), payload.values )
    } ),
)
