import { createSelector } from '@reduxjs/toolkit'
import { IState } from 'src/models'
import { itemSelector } from 'src/state'
import { find } from 'src/util'

export function workoutSelector( state: IState ) {
  return state.workout
}

export const workoutSelectorStructure = createSelector(
  [ workoutSelector, itemSelector ],
  ( workout, items ) => {
    if( workout.type === 'STRUCTURE' ) {
      return find( items, workout.id )
    }
    throw new Error()
  },
)

export const workoutSelectorExercice = createSelector(
  [ workoutSelector, itemSelector ],
  ( workout, items ) => {
    if( workout.type === 'EXERCICE' ) {
      return find( items, workout.id )
    }
    throw new Error()
  },
)
