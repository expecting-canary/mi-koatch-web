import { ITemplate } from './item'
import { IItem } from './items'
import { IWorkout } from './workout'

export interface IState {
  items: IItem[]
  workout: IWorkout
  templates: ITemplate[]
}
