import { Session } from './session';
import { Serie } from './serie';
import { RotationStructure } from './rotation';
import { BasicStructure } from './basic';

export type StructureTypes = Session | Serie | RotationStructure;

export type Structure = StructureTypes & BasicStructure;

export type StructureUpdater = Partial<Structure>;

export * from './session';
export * from './serie';
export * from './rotation';
