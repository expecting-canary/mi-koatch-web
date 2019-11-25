export type ExerciceState = 'TODO' | 'ONGOING' | 'DONE';

export enum ExerciceType {
  None
}

export interface IExercice {
  state: ExerciceState;
  type: ExerciceType;
  name: string;
  start: Date;
  stop: Date;
  rest: number;
  weight: number;
  series: number;
  repetitions: number;
  result: Serie.Type[];
}
