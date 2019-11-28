import { ISerie, SerieState } from './type';

function isStateBuilder(...states: SerieState[]) {
  return (serie: ISerie) => states.includes(serie.state);
}
export const util = {
  isStateBuilder,
  isState(serie: ISerie, ...states: SerieState[]) {
    return states.includes(serie.state);
  }
};
