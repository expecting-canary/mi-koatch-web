import { EXERCICE_WORKOUT, IDataBase, ITemplateBase } from 'src/types'

interface IExerciceWorkoutCommon {
  type: typeof EXERCICE_WORKOUT
  weight: number
  repetitions: number
}

export type IExerciceWorkoutTemplate = ITemplateBase & IExerciceWorkoutCommon
export type IExerciceWorkoutData = IDataBase & IExerciceWorkoutCommon
