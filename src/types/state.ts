import { IItem } from './item'
import { IWorkout } from './workout'

export interface IState {
  items: IItem[]
  workout: IWorkout
}
