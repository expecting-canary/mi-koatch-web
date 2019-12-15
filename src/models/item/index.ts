import {
  IExerciceRunningData,
  IExerciceRunningTemplate,
  IExerciceWorkoutData,
  IExerciceWorkoutTemplate,
  IStructureSerieData,
  IStructureSerieTemplate,
  IStructureSessionData,
  IStructureSessionTemplate,
} from 'src/models'

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

export type IDataUpdater = Partial<IData> & Pick<IData, 'id'>

export type ITemplateUpdater = Partial<ITemplate> & Pick<ITemplate, 'id'>

export * from './exercice'
export * from './structure'
export * from './base'
