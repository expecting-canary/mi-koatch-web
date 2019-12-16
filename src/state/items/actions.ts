import { createAction } from '@reduxjs/toolkit'
import {
  ITEM_ADD,
  ITEM_UPDATE,
  itemCreate,
  serieStart,
  sessionStart,
} from 'src/state'
import {
  EXERCICE_RUNNING,
  EXERCICE_WORKOUT,
  ID,
  IData,
  IItem,
  IItemUpdater,
  Progress,
  PROGRESS_DONE,
  PROGRESS_ONGOING,
  PROGRESS_TODO,
  STRUCTURE_ROTATION,
  STRUCTURE_SERIE,
  STRUCTURE_SESSION,
  Thunk,
} from 'src/types'
import { find } from 'src/util'

import { dataStart, dataStop } from './data/exercices/actions'

export const itemAdd = createAction(
  ITEM_ADD,
  ( serie: IItem | IItem[] ) => {
    return { payload: serie }
  } )

export const itemUpdate = createAction(
  ITEM_UPDATE,
  ( id: IItem[ 'id' ], values: IItemUpdater ) => {
    return { payload: { id, values } }
  } )

export function itemThunkCreate(
  data: IData,
  start = false,
): Thunk<IItem> {
  return function( dispatch ) {
    const item = itemCreate( data )
    dispatch( itemAdd( item ) )
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
        return dispatch( sessionStart( item ) )
      case STRUCTURE_SERIE:
        return dispatch( serieStart( item ) )
      case STRUCTURE_ROTATION:
        return PROGRESS_TODO
      case EXERCICE_RUNNING:
        dispatch( dataStart( id ) )
        return PROGRESS_ONGOING
      case EXERCICE_WORKOUT:
        dispatch( dataStart( id ) )
        return PROGRESS_ONGOING
    }
  }
}

export function itemThunkNext( id: ID ): Thunk<Progress> {
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
        dispatch( dataStop( id ) )
        return PROGRESS_DONE
      case EXERCICE_WORKOUT:
        dispatch( dataStop( id ) )
        return PROGRESS_DONE
    }
  }
}
