import {
  IStructure,
  IStructureBase,
  IStructureData,
  STRUCTURE,
} from 'src/models'
import uuid from 'uuid'

export function isStructure( structure: any ) {
  return (
    typeof structure === 'object' &&
    typeof structure.type === 'string' &&
    structure.type.includes( STRUCTURE )
  )
}

export function structureHasState(
  structure: IStructure,
  ...states: Array<IStructure[ 'state' ]>
) {
  return states.includes( structure.state )
}

function structureCreateBase(): IStructureBase {
  return {
    id: uuid.v4(),
    state: 'TODO',
    start: 0,
    stop: 0,
    result: [],
  }
}

export function structureCreate( data: IStructureData ): IStructure {
  return { ...structureCreateBase(), ...data }
}
