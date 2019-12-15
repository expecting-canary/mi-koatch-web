import { createSelector } from 'reselect'
import { IState } from 'src/models'

import { itemHasState } from './util'

export function itemSelector( state: IState ) {
  return state.items
}

export const itemSelectorTodo = createSelector(
  itemSelector,
  items => items.filter( item => itemHasState( item, 'TODO' ) ),
)
export const itemSelectorOngoing = createSelector(
  itemSelector,
  items => items.filter( item => itemHasState( item, 'ONGOING' ) ),
)
export const itemSelectorDone = createSelector(
  itemSelector,
  items => items.filter( item => itemHasState( item, 'DONE' ) ),
)
