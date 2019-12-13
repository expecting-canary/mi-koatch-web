import { createAction } from '@reduxjs/toolkit'
import {
  ID,
  IWorkout,
  IWorkoutExercice,
  IWorkoutNone,
  IWorkoutStructure,
} from 'src/models'
import { WORKOUT_SET } from 'src/state'

import { WORKOUT_SELECT } from '../action'

export const workoutActionSet = createAction(
  WORKOUT_SET,
  ( type: IWorkout[ 'type' ], id?: ID ) => {
    switch( type ) {
      case 'EXERCICE':
        return { payload: { type, id } as IWorkoutExercice }
      case 'STRUCTURE':
        return { payload: { type, id, index: [] } as IWorkoutStructure }
      default:
        return { payload: { type } as IWorkoutNone }
    }
  },
)

export const workoutActionSelect = createAction(
  WORKOUT_SELECT,
  ( level: number, index: number ) => ( { payload: { level, index } } ),
)
