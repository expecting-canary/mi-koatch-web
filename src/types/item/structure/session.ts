import { ID, IDataBase, ITemplateBase, STRUCTURE_SESSION } from 'src/types'

interface ISessionCommon {
  type: typeof STRUCTURE_SESSION
  content: ID[]
}

export type IStructureSessionTemplate = ITemplateBase & ISessionCommon

export type IStructureSessionData = IDataBase & ISessionCommon
