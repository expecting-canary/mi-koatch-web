import {
  IExerciceRunningData,
  IExerciceRunningTemplate,
  IExerciceWorkoutData,
  IExerciceWorkoutTemplate,
  IStructureSerieData,
  IStructureSerieTemplate,
  IStructureSessionData,
  IStructureSessionTemplate,
} from 'src/types'

export type IData =
  | IStructureSerieData
  | IStructureSessionData
  | IExerciceRunningData
  | IExerciceWorkoutData

export type ITemplate =
  | IStructureSerieTemplate
  | IStructureSessionTemplate
  | IExerciceRunningTemplate
  | IExerciceWorkoutTemplate

export type IDataUpdater = Partial<IData>

export type ITemplateUpdater = Partial<ITemplate>

export type IItem = IData | ITemplate

export type IItemUpdater = IDataUpdater | ITemplateUpdater

export * from './exercice'
export * from './structure'
export * from './base'
