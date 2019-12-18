import { STRUCTURE_SESSION } from 'src/constants'
import { ID, IItemBase } from 'src/types'

export interface IStructureSession extends IItemBase<typeof STRUCTURE_SESSION> {
  content: ID[]
  results: ID[]
}
