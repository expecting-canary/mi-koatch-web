import {
  ID,
  IStructure,
  IStructureData,
  Progress,
  STRUCTURE_ROTATION,
  STRUCTURE_SERIE,
  STRUCTURE_SESSION,
  Thunk,
} from 'src/models'
import {
  structureActionAdd,
  structureCreate,
  structureSerieThunkStart,
  structureSessionThunkStart,
} from 'src/state'
import { find } from 'src/util/list'

export function structureThunkCreate(
  data: IStructureData,
  start = false,
): Thunk<IStructure> {
  return function( dispatch ) {
    const structure = structureCreate( data )
    dispatch( structureActionAdd( structure ) )
    if( start ) {
      dispatch( structureThunkStart( structure.id ) )
    }
    return structure
  }
}

export function structureThunkStart( id: ID ): Thunk<Progress> {
  return function( dispatch, getState ) {
    const structure = find( getState().structures, id )
    switch( structure.type ) {
      case STRUCTURE_SESSION:
        return dispatch( structureSessionThunkStart( structure ) )
      case STRUCTURE_SERIE:
        return dispatch( structureSerieThunkStart( structure ) )
      case STRUCTURE_ROTATION:
        break
    }
    return 'TODO'
  }
}

export function structureThunkNext( id: ID ): Thunk<Progress> {
  return function( dispatch, getState ) {
    const structure = find( getState().structures, id )
    switch( structure.type ) {
      case STRUCTURE_SESSION:
        return dispatch( structureSessionThunkStart( structure ) )
      case STRUCTURE_SERIE:
        return dispatch( structureSerieThunkStart( structure ) )
      case STRUCTURE_ROTATION:
        return 'DONE'
    }
  }
}
