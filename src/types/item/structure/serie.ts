import { STRUCTURE_SERIE } from 'src/constants'
import { ID, IItemBase } from 'src/types'

export interface IStructureSerie extends IItemBase<typeof STRUCTURE_SERIE> {
  rest: number
  series: number
  content: ID
  results: Array<[ ID, number ]>,
}
