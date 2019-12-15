import { EXERCICE_WORKOUT, IDataBase, ITemplateBase } from 'src/models'

interface IExerciceWorkoutCommon {
  type: typeof EXERCICE_WORKOUT
  weight: number
  repetitions: number
}

export type IExerciceWorkoutTemplate = ITemplateBase & IExerciceWorkoutCommon
export type IExerciceWorkoutData = IDataBase & IExerciceWorkoutCommon
