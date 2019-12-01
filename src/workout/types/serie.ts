export type SerieState = 'TODO' | 'ONGOING' | 'RESTING' | 'DONE';

export interface ISerie {
  id: string;
  state: SerieState;
  start: Date;
  rest: Date;
  stop: Date;
  weight: number;
  repetitions: number;
}

export type SerieEditable = 'weight' | 'repetitions';

export type SerieUpdater = Partial<Pick<ISerie, SerieEditable>> & { id: string };