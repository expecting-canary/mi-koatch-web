import { Structure, StructureBase, StructureData } from 'src/models';
import uuid from 'uuid';

export function structureHasState(serie: Structure, ...states: Structure['state'][]) {
  return states.includes(serie.state);
}

function structureCreateBase(): StructureBase {
  return {
    id: uuid.v4(),
    state: 'TODO',
    name: '',
    level: 0,
    start: 0,
    stop: 0,
    result: []
  };
}

export function structureCreate(data: StructureData): Structure {
  return { ...structureCreateBase(), ...data };
}
