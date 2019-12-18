import { IExerciceWorkout, IStructureSerie, IStructureSession } from 'src/types'

import { IExerciceRunning } from './exercice'
import { IStructureRotation } from './structure/rotation'

export type IItem =
  | IStructureSerie
  | IStructureSession
  | IStructureRotation
  | IExerciceWorkout
  | IExerciceRunning

export type IItemUpdater = Partial<IItem>

export * from './exercice'
export * from './structure'
export * from './base'
