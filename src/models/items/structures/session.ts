import { ID, IExerciceData, IStructureBase, IStructureData, STRUCTURE_SESSION } from 'src/models'

export interface IStructureSessionData {
  type: typeof STRUCTURE_SESSION;
  content: Array<IExerciceData | IStructureData>;
}

export type IStructureSessionResult = ID[];

export type IStructureSession = IStructureSessionData & IStructureBase<IStructureSessionResult>;
