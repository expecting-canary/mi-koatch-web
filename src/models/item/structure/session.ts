import { ID, IDataBase, ITemplateBase, STRUCTURE_SESSION } from 'src/models'

export interface IStructureSessionTemplate extends ITemplateBase {
  type: typeof STRUCTURE_SESSION
  templates: ID[]
}

export interface IStructureSessionData extends IDataBase {
  content: ID[]
}
