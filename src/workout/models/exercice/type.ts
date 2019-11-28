import { ISerie } from '../models';

export type ExerciceState = 'TODO' | 'ONGOING' | 'DONE';

export enum ExerciceType {
  None
}

export interface IExercice {
  id: string;
  state: ExerciceState;
  type: ExerciceType;
  name: string;
  start: Date;
  stop: Date;
  rest: number;
  weight: number;
  series: number;
  repetitions: number;
  result: ISerie[];
}

export type ExerciceEditable = 'weight' | 'repetitions' | 'rest' | 'series';

export type ExerciceUpdater = Partial<Pick<IExercice, ExerciceEditable>> & { id: string };
