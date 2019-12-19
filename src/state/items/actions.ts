import { createAction } from '@reduxjs/toolkit'
import {
  EXERCICE_RUNNING,
  EXERCICE_WORKOUT,
  ITEM_ADD,
  ITEM_DELETE,
  ITEM_UPDATE,
  PROGRESS_DONE,
  PROGRESS_ONGOING,
  PROGRESS_TODO,
  STRUCTURE_ROTATION,
  STRUCTURE_SERIE,
  STRUCTURE_SESSION,
} from 'src/constants'
import { itemCreate, serieStart, sessionStart } from 'src/state'
import { ID, IItem, IItemType, IItemUpdater, IProgress, Thunk } from 'src/types'
import { find } from 'src/util'

import { itemDoStart, itemDoStop } from './handlers'

///

export const itemAdd = createAction( ITEM_ADD, ( item: IItem | IItem[] ) => ( {
  payload: item,
} ) )

export const itemUpdate = createAction(
  ITEM_UPDATE,
  ( id: IItem[ 'id' ], values: IItemUpdater | ( ( item: IItem ) => void ) ) => ( {
    payload: { id, values },
  } ),
)

export const itemDelete = createAction( ITEM_DELETE, ( item: IItem ) => ( {
  payload: item.id,
} ) )

///

export function itemActionCreate( data: IItemType | IItem, start = false ): Thunk<IItem> {
  return dispatch => {
    const item = itemCreate( data )
    dispatch( itemAdd( item ) )
    if( start ) {
      dispatch( itemActionStart( item.id ) )
    }
    return item
  }
}

export function itemStart( id: ID ): Thunk<IProgress> {
  return function( dispatch ) {
    dispatch( itemUpdate( id, itemDoStart ) )
    return PROGRESS_ONGOING
  }
}

export function itemStop( id: ID ): Thunk<IProgress> {
  return dispatch => {
    dispatch( itemUpdate( id, itemDoStop ) )
    return PROGRESS_DONE
  }
}

export function itemActionStart( id: ID ): Thunk<IProgress> {
  return function( dispatch, getState ) {
    const item = find( getState().items, id )
    switch( item.type ) {
      case STRUCTURE_SESSION:
        return dispatch( sessionStart( item ) )
      case STRUCTURE_SERIE:
        return dispatch( serieStart( item ) )
      case STRUCTURE_ROTATION:
        return PROGRESS_TODO
      case EXERCICE_RUNNING:
        dispatch( itemStart( id ) )
        return PROGRESS_ONGOING
      case EXERCICE_WORKOUT:
        dispatch( itemStart( id ) )
        return PROGRESS_ONGOING
    }
  }
}

export function itemActionNext( id: ID ): Thunk<IProgress> {
  return function( dispatch, getState ) {
    const item = find( getState().items, id )
    switch( item.type ) {
      case STRUCTURE_SESSION:
        return dispatch( sessionStart( item ) )
      case STRUCTURE_SERIE:
        return dispatch( serieStart( item ) )
      case STRUCTURE_ROTATION:
        return PROGRESS_DONE
      case EXERCICE_RUNNING:
        return dispatch( itemStop( id ) )
      case EXERCICE_WORKOUT:
        return dispatch( itemStop( id ) )
    }
  }
}
