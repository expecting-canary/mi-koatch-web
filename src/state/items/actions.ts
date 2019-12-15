import { createAction } from '@reduxjs/toolkit'
import { IItem, IItemUpdater } from 'src/models'
import { ITEM_ADD, ITEM_START, ITEM_STOP, ITEM_UPDATE } from 'src/state'

export const itemActionAdd = createAction(
  ITEM_ADD,
  ( serie: IItem | IItem[] ) => {
    return { payload: serie }
  } )
export const itemActionStart = createAction(
  ITEM_START,
  ( id: IItem[ 'id' ] ) => {
    return { payload: id }
  } )
export const itemActionStop = createAction(
  ITEM_STOP,
  ( id: IItem[ 'id' ] ) => {
    return { payload: id }
  } )
export const itemActionUpdate = createAction(
  ITEM_UPDATE,
  ( id: IItem[ 'id' ], values: IItemUpdater ) => {
    return { payload: { id, values } }
  } )
