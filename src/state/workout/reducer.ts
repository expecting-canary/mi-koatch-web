import { createReducer } from '@reduxjs/toolkit'
import { IWorkout } from 'src/models'

import { workoutActionSelect, workoutActionSet } from './actions'
import { workoutDoSelect } from './handlers'

export const workoutReducer = createReducer<IWorkout>(
  { type: 'NONE' },
  builder =>
    builder
      .addCase( workoutActionSet, ( state, { payload } ) => ( { ...payload } ) )
      .addCase( workoutActionSelect, ( state, { payload: { level, index } } ) =>
        workoutDoSelect( state, level, index ),
      ),
)
