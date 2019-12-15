import {
  EXERCICE_RUNNING,
  EXERCICE_WORKOUT,
  ID,
  Progress,
  STRUCTURE_ROTATION,
  STRUCTURE_SERIE,
  STRUCTURE_SESSION,
} from 'src/models'

type Types =
  | typeof STRUCTURE_SESSION
  | typeof STRUCTURE_SERIE
  | typeof STRUCTURE_ROTATION
  | typeof EXERCICE_WORKOUT
  | typeof EXERCICE_RUNNING

export interface ITemplateBase {
  id: ID
  type: Types
  root?: true
  name: string
}

export interface IDataBase {
  id: ID
  template: ID
  name: string
  state: Progress
  start: number
  stop: number
}
