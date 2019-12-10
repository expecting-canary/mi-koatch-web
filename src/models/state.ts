import { Exercice } from './exercices';
import { Structure } from './structures';

export interface State {
  exercices: Exercice[];
  structures: Structure[];
}
