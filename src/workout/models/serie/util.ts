import { ISerie, SerieState } from './type';

export function isStateBuilder(...states: SerieState[]) {
  return (serie: ISerie) => states.includes(serie.state);
}
