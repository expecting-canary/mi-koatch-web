import { ID, IItemBase, STRUCTURE_SESSION } from 'src/types'

export interface IStructureSession extends IItemBase<typeof STRUCTURE_SESSION> {
  content: ID[]
  results: ID[]
}
