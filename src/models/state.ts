import { Exercice } from './exercices';
import { IStructure } from './structures';

export interface IState {
  exercices: Exercice[];
  structures: IStructure[];
}
