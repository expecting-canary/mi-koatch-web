import { Workout, Exercice, Exercice, Session } from '../models';

export type State = {
  workout: Workout;
  session: Session[];
  exercice: Exercice[];
  serie: Exercice[];
};
