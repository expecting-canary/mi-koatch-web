import { ExerciceTypes } from './exercices';

export type ExerciceState = 'TODO' | 'ONGOING' | 'DONE';

export interface BasicExercice {
  id: string;
  state: ExerciceState;
  start: number;
  stop: number;
}

export type Exercice = ExerciceTypes & BasicExercice;

export type ExerciceUpdater = Partial<Exercice> & Pick<Exercice, 'id'>;

export * from './exercices';
