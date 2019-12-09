import { ExerciceTypes } from '../exercices';
import { Exercice } from '../exercice';
import { BasicStructure } from './basic';

export interface Serie extends BasicStructure {
  type: 'SERIE';

  content: ExerciceTypes;
  series: number;
  rest: number;
  result: [Exercice['id'], number][];
}
