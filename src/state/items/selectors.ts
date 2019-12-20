import { createSelector } from 'reselect'
import { PROGRESS_DONE, PROGRESS_ONGOING, PROGRESS_TODO } from 'src/constants'
import { ID, IItem, IState } from 'src/types'
import { find } from 'src/util'

import { itemHasState } from './util'

export function getItems( state: IState ): IItem[] {
  return state.items
}
export function getItem( state: IState, id: ID ) {
  return find( getItems( state ), id )
}

export const getTodos = createSelector( getItems, items =>
  items.filter( item => itemHasState( item, PROGRESS_TODO ) ),
)
export const getOngoing = createSelector( getItems, items =>
  items.filter( item => itemHasState( item, PROGRESS_ONGOING ) ),
)
export const getDones = createSelector( getItems, items =>
  items.filter( item => itemHasState( item, PROGRESS_DONE ) ),
)
