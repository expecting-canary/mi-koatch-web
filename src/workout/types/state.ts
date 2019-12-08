import { Workout, Exercice, Serie, Session } from '../models';

export type State = {
  workout: Workout;
  session: Session[];
  exercice: Exercice[];
  serie: Serie[];
};
