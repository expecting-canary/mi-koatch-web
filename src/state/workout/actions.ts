import { createAction } from '@reduxjs/toolkit'
import { WORKOUT_SELECT, WORKOUT_SET } from 'src/state'
import {
  ID,
  IWorkout,
  IWorkoutExercice,
  IWorkoutNone,
  IWorkoutStructure,
} from 'src/types'

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
