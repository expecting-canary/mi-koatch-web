import { createSelector } from 'reselect'
import { IState } from 'src/types'

export const getTemplates = ( state: IState ) => state.templates

export const getTemplatesRoot = createSelector(
  getTemplates, items => items.filter( item => item.root ),
)
