import { structureSerieThunkStart, structureSessionThunkStart } from 'src/state'
import {
  ID,
  IProgress,
  STRUCTURE_ROTATION,
  STRUCTURE_SERIE,
  STRUCTURE_SESSION,
  Thunk,
} from 'src/types'
import { find } from 'src/util'

export function structureThunkNext( id: ID ): Thunk<IProgress> {
  return function( dispatch, getState ) {
    const item = find( getState().items, id )
    switch( item.type ) {
      case STRUCTURE_SESSION:
        return dispatch( structureSessionThunkStart( item ) )
      case STRUCTURE_SERIE:
        return dispatch( structureSerieThunkStart( item ) )
      case STRUCTURE_ROTATION:
        return 'DONE'
    }
    throw new Error()
  }
}
