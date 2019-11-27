import { generateId } from '../../../common/id';
import { Exercice } from '../models';
import { ISession } from './type';

export function init(): ISession {
  return {
    id: generateId(),
    state: 'TODO',
    start: new Date(),
    stop: new Date(),
    exercices: [Exercice.init(), Exercice.init()]
  };
}
