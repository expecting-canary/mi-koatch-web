import {
  EXERCICE_RUNNING,
  EXERCICE_WORKOUT,
  ID,
  Progress,
  STRUCTURE_ROTATION,
  STRUCTURE_SERIE,
  STRUCTURE_SESSION,
} from 'src/types'

export type Types =
  | typeof STRUCTURE_SESSION
  | typeof STRUCTURE_SERIE
  | typeof STRUCTURE_ROTATION
  | typeof EXERCICE_WORKOUT
  | typeof EXERCICE_RUNNING

export interface IItemBase {
  id: ID
  name: string
}

export interface ITemplateBase extends IItemBase {
  type: Types
  root?: true
}

export interface IDataBase extends IItemBase {
  type: Types
  template_id: ID
  state: Progress
  start: number
  stop: number
}
