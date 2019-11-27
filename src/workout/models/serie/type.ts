export type State = 'TODO' | 'ONGOING' | 'RESTING' | 'DONE';

export interface ISerie {
  id: string;
  state: State;
  start: Date;
  rest: Date;
  stop: Date;
  weight: number;
  repetitions: number;
}

export type Editable = 'weight' | 'repetitions';

export type Updater = Partial<Pick<ISerie, Editable>> & { id: string };