import { ID } from '../shared/id'
import { EXERCICE, STRUCTURE } from '../types'

export interface IWorkoutNone {
  type: 'NONE'
}
export interface IWorkoutStructure {
  type: typeof STRUCTURE
  id: ID
  index: number[]
}
export interface IWorkoutExercice {
  type: typeof EXERCICE
  id: ID
}

export type IWorkout = IWorkoutNone | IWorkoutStructure | IWorkoutExercice
