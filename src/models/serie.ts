import { ExerciceTypes } from './types/all';

export type ExerciceState = 'TODO' | 'ONGOING' | 'DONE';

interface BasicExercice {
  id: string;

  state: ExerciceState;

  type: string;

  start: number;
  stop: number;
}

export type Exercice = ExerciceTypes & BasicExercice;

export type ExerciceUpdater = Partial<Exercice> & Pick<Exercice, 'id'>;
