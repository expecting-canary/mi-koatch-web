import { ExerciceData, ID, StructureBase, STRUCTURE_SERIE } from 'src/models';

export interface StructureSerieData {
  type: typeof STRUCTURE_SERIE;
  content: ExerciceData;
  series: number;
  rest: number;
}

export type StructureSerieResult = [ID, number][];

export type StructureSerie = StructureSerieData & StructureBase<StructureSerieResult>;
