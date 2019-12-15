import {
  DONE,
  EXERCICE_RUNNING,
  EXERCICE_WORKOUT,
  ID,
  IItem,
  IItemData,
  ONGOING,
  Progress,
  STRUCTURE_ROTATION,
  STRUCTURE_SERIE,
  STRUCTURE_SESSION,
  Thunk,
  TODO,
} from 'src/models'
import {
  itemActionAdd,
  itemActionStart,
  itemActionStop,
  itemCreate,
  structureSerieThunkStart,
  structureSessionThunkStart,
} from 'src/state'
import { find } from 'src/util'

export function itemThunkCreate(
  data: IItemData,
  start = false,
): Thunk<IItem> {
  return function( dispatch ) {
    const item = itemCreate( data )
    dispatch( itemActionAdd( item ) )
    if( start ) {
      dispatch( itemThunkStart( item.id ) )
    }
    return item
  }
}

export function itemThunkStart( id: ID ): Thunk<Progress> {
  return function( dispatch, getState ) {
    const item = find( getState().items, id )
    switch( item.type ) {
      case STRUCTURE_SESSION:
        return dispatch( structureSessionThunkStart( item ) )
      case STRUCTURE_SERIE:
        return dispatch( structureSerieThunkStart( item ) )
      case STRUCTURE_ROTATION:
        return TODO
      case EXERCICE_RUNNING:
        dispatch( itemActionStart( id ) )
        return ONGOING
      case EXERCICE_WORKOUT:
        dispatch( itemActionStart( id ) )
        return ONGOING
    }
  }
}

export function itemThunkNext( id: ID ): Thunk<Progress> {
  return function( dispatch, getState ) {
    const item = find( getState().items, id )
    switch( item.type ) {
      case STRUCTURE_SESSION:
        return dispatch( structureSessionThunkStart( item ) )
      case STRUCTURE_SERIE:
        return dispatch( structureSerieThunkStart( item ) )
      case STRUCTURE_ROTATION:
        return DONE
      case EXERCICE_RUNNING:
        dispatch( itemActionStop( id ) )
        return DONE
      case EXERCICE_WORKOUT:
        dispatch( itemActionStop( id ) )
        return DONE
    }
  }
}
