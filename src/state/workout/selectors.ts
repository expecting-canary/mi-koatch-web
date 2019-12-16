import { createSelector } from '@reduxjs/toolkit'
import { getItems } from 'src/state'
import { IState } from 'src/types'
import { find } from 'src/util'

export function workoutSelector( state: IState ) {
  return state.workout
}

export const workoutSelectorStructure = createSelector(
  [ workoutSelector, getItems ],
  ( workout, items ) => {
    if( workout.type === 'STRUCTURE' ) {
      return find( items, workout.id )
    }
    throw new Error()
  },
)

export const workoutSelectorExercice = createSelector(
  [ workoutSelector, getItems ],
  ( workout, items ) => {
    if( workout.type === 'EXERCICE' ) {
      return find( items, workout.id )
    }
    throw new Error()
  },
)
