import { getTemplates } from 'src/state'
import {
  EXERCICE_WORKOUT,
  ID,
  STRUCTURE_SERIE,
  STRUCTURE_SESSION,
  Thunk,
} from 'src/types'
import { find } from 'src/util'

export function createDataFromTemplate( id: ID ): Thunk<ID> {
  return function( dispatch, getState ) {
    const template = find( getTemplates( getState() ), id )
    switch( template.type ) {
      case EXERCICE_WORKOUT:
      case STRUCTURE_SERIE:
      case STRUCTURE_SESSION:
        break;
    }
    return id;
  }
}
