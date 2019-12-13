import { IStructureRotation, IStructureRotationData } from './rotation';
import { IStructureSerie, IStructureSerieData, IStructureSerieResult } from './serie';
import { IStructureSession, IStructureSessionData } from './session';

export type IStructureData = IStructureSessionData | IStructureSerieData | IStructureRotationData;

export type IStructureResult = IStructureSerieResult;

export type IStructure = IStructureSession | IStructureSerie | IStructureRotation;

export type IStructureUpdater = Partial<IStructure>;

export * from './base';
export * from './rotation';
export * from './serie';
export * from './session';
