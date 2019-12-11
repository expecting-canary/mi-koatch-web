import { IStructure, IStructureBase, IStructureData } from 'src/models';
import uuid from 'uuid';

export function structureHasState( serie: IStructure, ...states: Array<IStructure[ 'state' ]> ) {
  return states.includes( serie.state );
}

function structureCreateBase(): IStructureBase {
  return {
    id: uuid.v4(),
    state: 'TODO',
    name: '',
    level: 0,
    start: 0,
    stop: 0,
    result: [],
  };
}

export function structureCreate( data: IStructureData ): IStructure {
  return { ...structureCreateBase(), ...data };
}
