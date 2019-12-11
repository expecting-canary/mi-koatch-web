import { ExerciceData, ID, IStructureBase, IStructureData, STRUCTURE_SESSION } from 'src/models';

export interface IStructureSessionData {
  type: typeof STRUCTURE_SESSION;
  content: Array<ExerciceData | IStructureData>;
}

export type IStructureSessionResult = ID[];

export type IStructureSession = IStructureSessionData & IStructureBase<IStructureSessionResult>;
