import { createAction } from '@reduxjs/toolkit'
import {
  EXERCICE,
  IExercice,
  ISelectedItem,
  IStructure,
  STRUCTURE,
} from 'src/models'
import { isExercice, isStructure, SELECTED_SELECT } from 'src/state'

export const selectedActionSelect = createAction(
  SELECTED_SELECT,
  ( item: IStructure | IExercice ) => {
    if( isExercice( item ) ) {
      return { payload: { type: EXERCICE, id: item.id } as ISelectedItem }
    } else if( isStructure( item ) ) {
      return { payload: { type: STRUCTURE, id: item.id } as ISelectedItem }
    }
    throw new Error( 'selectedActionSelect : Unsupported item type' )
  },
)
