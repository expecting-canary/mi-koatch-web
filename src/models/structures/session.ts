import { Structure } from '.';
import { Exercice } from '../exercice';
import { BasicStructure } from './basic';

export interface Session extends BasicStructure {
  type: 'SESSION';
  index: number;
  content: (['EXERCICE', Exercice['id']] | ['STRUCTURE', Structure['id']])[];
}
