export type StructureState = 'TODO' | 'ONGOING' | 'DONE';

export interface BasicStructure {
  id: string;

  state: StructureState;

  type: string;

  level: number;

  name: string;

  start: number;
  stop: number;
}
