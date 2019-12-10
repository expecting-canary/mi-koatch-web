import { ID } from 'src/models';

export type StructureState = 'TODO' | 'ONGOING' | 'DONE';

export interface StructureBase<Result extends [] = []> {
  id: ID;

  state: StructureState;

  level: number;

  name: string;

  start: number;
  stop: number;

  result: Result;
}
