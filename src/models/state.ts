import { IExercice } from './exercices'
import { IStructure } from './structures'

export interface IState {
  exercices: IExercice[];
  structures: IStructure[];
}
