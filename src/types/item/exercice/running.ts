import { EXERCICE_RUNNING } from 'src/constants'
import { IItemBase } from 'src/types'

export interface IExerciceRunning extends IItemBase<typeof EXERCICE_RUNNING> {
  distance?: number
  speed?: number
}
