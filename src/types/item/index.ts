import { IExerciceWorkout, IStructureSerie, IStructureSession } from 'src/types'

export type IItem =
  | IStructureSerie
  | IStructureSession
  | IExerciceWorkout

export type IItemUpdater = Partial<IItem>

export * from './exercice'
export * from './structure'
export * from './base'
