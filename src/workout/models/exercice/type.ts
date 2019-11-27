import { ISerie } from '../models';

export type State = 'TODO' | 'ONGOING' | 'DONE';

export enum ExerciceType {
  None
}

export interface IExercice {
  id: string;
  state: State;
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

export type Editable = 'weight' | 'repetitions' | 'rest' | 'series';

export type Updater = Partial<Pick<IExercice, Editable>> & { id: string };
