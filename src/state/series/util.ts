import { Exercice } from 'src/models/serie';

export function hasSerieState(serie: Exercice, ...states: Exercice['state'][]) {
  return states.includes(serie.state);
}
