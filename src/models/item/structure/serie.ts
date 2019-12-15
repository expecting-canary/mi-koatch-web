import { ID, IDataBase, ITemplateBase, STRUCTURE_SERIE } from 'src/models'

interface IStructureSerieCommon {
  series: number
  rest: number
}

export interface IStructureSerieTemplate extends IStructureSerieCommon, ITemplateBase {
  type: typeof STRUCTURE_SERIE
  template: ID
  series: number
  rest: number
}

export interface IStructureSerieData extends IStructureSerieCommon, IDataBase {
  content: Array<[ ID, number ]>
}
