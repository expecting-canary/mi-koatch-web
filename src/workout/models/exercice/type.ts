namespace Exercice {
  export type State = 'TODO' | 'ONGOING' | 'DONE';

  export enum ExerciceType {
    None
  }

  export interface Type {
    state: State;
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
}
