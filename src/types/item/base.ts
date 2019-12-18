import {
  EXERCICE_RUNNING,
  EXERCICE_WORKOUT,
  STRUCTURE_ROTATION,
  STRUCTURE_SERIE,
  STRUCTURE_SESSION,
} from 'src/constants'
import { ID, IProgress } from 'src/types'

export type IItemType =
  | typeof STRUCTURE_SESSION
  | typeof STRUCTURE_SERIE
  | typeof STRUCTURE_ROTATION
  | typeof EXERCICE_WORKOUT
  | typeof EXERCICE_RUNNING

export interface IItemBase<Type extends IItemType> {
  id: ID
  type: Type
  root?: true
  name: string
  state: IProgress
  creation: number
  start: number
  stop: number
}
