import { ID, IDataBase, ITemplateBase, STRUCTURE_SERIE } from 'src/types'

interface IStructureSerieCommon<Content> {
  type: typeof STRUCTURE_SERIE
  rest: number
  series: number
  content: Content
}

export type IStructureSerieTemplate =
  ITemplateBase & IStructureSerieCommon<ID>

export type IStructureSerieData =
  IDataBase & IStructureSerieCommon<Array<[ ID, number ]>>
