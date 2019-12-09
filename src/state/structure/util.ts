import { Structure } from 'src/models/structures';

export function hasStructureState(serie: Structure, ...states: Structure['state'][]) {
  return states.includes(serie.state);
}
