import { ExerciceData, ID, IStructureBase, STRUCTURE_SERIE } from 'src/models';

export interface IStructureSerieData {
  type: typeof STRUCTURE_SERIE;
  content: ExerciceData;
  series: number;
  rest: number;
}

export type IStructureSerieResult = Array<[ ID, number ]>;

export type IStructureSerie = IStructureSerieData & IStructureBase<IStructureSerieResult>;
