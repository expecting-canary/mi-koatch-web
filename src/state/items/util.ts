import {
  EXERCICE_RUNNING,
  EXERCICE_WORKOUT,
  PROGRESS_TODO,
  STRUCTURE_ROTATION,
  STRUCTURE_SERIE,
  STRUCTURE_SESSION,
} from 'src/constants'
import { itemSerieCreate, itemSessionCreate } from 'src/state'
import { IItem, IItemBase, IItemType, IProgress } from 'src/types'
import uuid from 'uuid'

export function itemHasState( structure: IItem, ...states: IProgress[] ) {
  return states.includes( structure.state )
}

export function itemCreateBase<Type extends IItemType>(
  type: Type,
  name?: string,
): IItemBase<Type> {
  return {
    id: uuid.v4(),
    type,
    name: name || type,
    state: PROGRESS_TODO,
    creation: 0,
    start: 0,
    stop: 0,
  }
}

export function itemCreate( data: IItemType | IItem ): IItem {
  const template = ( typeof data === 'string' ? { type: data } : data ) as IItem
  switch( template.type ) {
    case EXERCICE_RUNNING:
    case EXERCICE_WORKOUT:
    case STRUCTURE_ROTATION:
      break
    case STRUCTURE_SESSION:
      return itemSessionCreate( template )
    case STRUCTURE_SERIE:
      return itemSerieCreate( template )
  }
  return {} as any
}
