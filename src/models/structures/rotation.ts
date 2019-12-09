import { ExerciceTypes } from '../exercices';
import { Exercice } from '../exercice';
import { BasicStructure } from './basic';

export interface RotationStructure extends BasicStructure {
  type: 'ROTATION';

  content: ExerciceTypes[];
  series: number;
  rest: {
    short: number;
    long: number;
  };
  result: [[Exercice['id'], number][], number][];
}
