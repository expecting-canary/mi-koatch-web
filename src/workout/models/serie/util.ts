import { ISerie, State } from './type';

export function isStateBuilder(...states: State[]) {
  return (serie: ISerie) => states.includes(serie.state);
}
