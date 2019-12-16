import { createAction } from '@reduxjs/toolkit'
import { ITEM_ADD, ITEM_UPDATE } from 'src/state'
import { ITemplate, ITemplateUpdater } from 'src/types'

export const itemAdd = createAction(
  ITEM_ADD,
  ( template: ITemplate | ITemplate[] ) => ( { payload: template } ),
)

export const itemUpdate = createAction(
  ITEM_UPDATE,
  ( id: ITemplate[ 'id' ], values: ITemplateUpdater ) => {
    return { payload: { id, values } }
  },
)
