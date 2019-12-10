import { ExerciceData, ID, StructureBase, STRUCTURE_ROTATION } from 'src/models';

export interface StructureRotationData {
  type: typeof STRUCTURE_ROTATION;

  content: ExerciceData[];
  series: number;
  rest: {
    short: number;
    long: number;
  };
}

export type StructureRotationResult = [[ID, number][], number][];

export type StructureRotation = StructureRotationData & StructureBase<StructureRotationResult>;
