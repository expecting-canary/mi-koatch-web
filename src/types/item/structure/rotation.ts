import { STRUCTURE_ROTATION } from 'src/constants'
import { ID, IItemBase } from 'src/types'

export interface IStructureRotation extends IItemBase<typeof STRUCTURE_ROTATION> {
  rest: {
    short: number,
    long: number,
  }
  series: number
  content: ID[]
  results: Array<[ Array<[ ID, number ]>, number ]>,
}
