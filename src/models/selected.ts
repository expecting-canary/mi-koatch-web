import { ID } from './id'
import { EXERCICE, STRUCTURE } from './types'

export interface ISelectedRef {
  type: typeof STRUCTURE | typeof EXERCICE
  id: ID
}

interface ISelectedDraft {
  type: 'DRAFT'
  of: typeof STRUCTURE | typeof EXERCICE
}

export type ISelectedItem = ISelectedRef | ISelectedDraft

export type ISelected = ISelectedItem[]
