import { ID, IExerciceData, IStructureBase, STRUCTURE_SERIE } from 'src/models'

export interface IStructureSerieData {
  type: typeof STRUCTURE_SERIE;
  content: IExerciceData;
  series: number;
  rest: number;
}

export type IStructureSerieResult = Array<[ ID, number ]>;

export type IStructureSerie = IStructureSerieData & IStructureBase<IStructureSerieResult>;
