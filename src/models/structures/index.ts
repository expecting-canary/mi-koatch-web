import { StructureSerie, StructureSerieData, StructureSerieResult } from './serie';
import { StructureSession, StructureSessionData } from './session';
import { StructureRotationData, StructureRotation } from './rotation';

export type StructureData = StructureSessionData | StructureSerieData | StructureRotationData;

export type StructureResult = StructureSerieResult;

export type Structure = StructureSession | StructureSerie | StructureRotation;

export type StructureUpdater = Partial<Structure>;

export * from './base';
export * from './rotation';
export * from './serie';
export * from './session';
