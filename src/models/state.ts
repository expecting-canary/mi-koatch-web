import { Exercice } from './exercice';
import { Structure } from './structures';

export interface State {
  exercices: Exercice[];
  structures: Structure[];
}
