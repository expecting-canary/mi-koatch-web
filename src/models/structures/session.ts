import { ExerciceData, ID, StructureBase, StructureData, STRUCTURE_SESSION } from 'src/models';

export interface StructureSessionData {
  type: typeof STRUCTURE_SESSION;
  content: (ExerciceData | StructureData)[];
}

export type StructureSessionResult = ID[];

export type StructureSession = StructureSessionData & StructureBase<StructureSessionResult>;
