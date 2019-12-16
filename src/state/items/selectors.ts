import { createSelector } from 'reselect'
import { DATA, IData, IItem, IState, ITemplate, TEMPLATE } from 'src/types'
import { hasTag } from 'src/util'

export function getItems( state: IState ): IItem[] {
  return state.items
}

export const getTemplates = createSelector( getItems, ( items ): ITemplate[] =>
  items.filter( item => hasTag( item, TEMPLATE ) ) as any,
)
export const getDatas = createSelector( getItems, ( items ): IData[] =>
  items.filter( item => hasTag( item, DATA ) ) as any,
)
