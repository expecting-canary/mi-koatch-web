import { EXERCICE_WORKOUT, IDataBase, ITemplateBase } from 'src/models'

interface IExerciceRunningCommon {
  distance?: number
  speed?: number
}

export interface IExerciceRunningTemplate extends
  ITemplateBase,
  IExerciceRunningCommon {
  type: typeof EXERCICE_WORKOUT
}
export type IExerciceRunningData = IDataBase & IExerciceRunningCommon
