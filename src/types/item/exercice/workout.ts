import { EXERCICE_WORKOUT, IItemBase } from 'src/types'

export interface IExerciceWorkout extends IItemBase<typeof EXERCICE_WORKOUT> {
  weight: number
  repetitions: number
}
