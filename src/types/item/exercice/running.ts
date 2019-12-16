import { EXERCICE_WORKOUT, IDataBase, ITemplateBase } from 'src/types'

interface IExerciceRunningCommon {
  type: typeof EXERCICE_WORKOUT
  distance?: number
  speed?: number
}

export type IExerciceRunningTemplate = ITemplateBase & IExerciceRunningCommon

export type IExerciceRunningData = IDataBase & IExerciceRunningCommon
