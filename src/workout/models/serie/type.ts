namespace Serie {
  export type State = 'TODO' | 'ONGOING' | 'RESTING' | 'DONE';

  export interface Type {
    state: State;
    start: Date;
    rest: Date;
    stop: Date;
    weight: number;
    repetitions: number;
  }
}
