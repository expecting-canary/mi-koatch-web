import { ExerciceData, ID, IStructureBase, STRUCTURE_ROTATION } from 'src/models';

export interface IStructureRotationData {
  type: typeof STRUCTURE_ROTATION;

  content: ExerciceData[];
  series: number;
  rest: {
    short: number;
    long: number;
  };
}

export type IStructureRotationResult = Array<[ Array<[ ID, number ]>, number ]>;

export type IStructureRotation = IStructureRotationData & IStructureBase<IStructureRotationResult>;
