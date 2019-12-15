import { createAction } from '@reduxjs/toolkit'
import { ITemplate, ITemplateUpdater } from 'src/models'
import { TEMPLATE_ADD, TEMPLATE_UPDATE } from 'src/state'

export const templateActionAdd = createAction(
  TEMPLATE_ADD,
  ( template: ITemplate | ITemplate[] ) => {
    return { payload: template }
  },
)

export const templateActionUpdate = createAction(
  TEMPLATE_UPDATE,
  ( id: ITemplate[ 'id' ], values: ITemplateUpdater ) => {
    return { payload: { id, values } }
  } )
