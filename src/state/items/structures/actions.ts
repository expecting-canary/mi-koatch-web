import {
  PROGRESS_DONE,
  STRUCTURE_ROTATION,
  STRUCTURE_SERIE,
  STRUCTURE_SESSION,
} from 'src/constants'
import { getItem, serieStart } from 'src/state'
import { ID, IProgress, Thunk } from 'src/types'

export function structureThunkNext( id: ID ): Thunk<IProgress> {
  return function( dispatch, getState ) {
    const item = getItem( getState(), id )
    switch( item.type ) {
      case STRUCTURE_SESSION:
        return dispatch( serieStart( item ) )
      case STRUCTURE_SERIE:
        return dispatch( serieStart( item ) )
      case STRUCTURE_ROTATION:
        return PROGRESS_DONE
    }
    throw new Error()
  }
}
