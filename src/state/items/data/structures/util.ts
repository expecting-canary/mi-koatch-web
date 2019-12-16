import {
  IStructure,
  IStructureBase,
  IStructureData,
  STRUCTURE,
} from 'src/types'
import { itemCreateBase } from 'src/state'

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
    ...itemCreateBase(),
    result: [],
  }
}

export function structureCreate( data: IStructureData ): IStructure {
  return { ...structureCreateBase(), ...data }
}
