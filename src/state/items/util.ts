import {
  EXERCICE_RUNNING,
  EXERCICE_WORKOUT,
  PROGRESS_TODO,
  STRUCTURE_ROTATION,
  STRUCTURE_SERIE,
  STRUCTURE_SESSION,
} from 'src/constants'
import { createSerie, exerciceCreate } from 'src/state'
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
    case STRUCTURE_SESSION:
      break
    case STRUCTURE_SERIE:
      return createSerie( template )
    case STRUCTURE_ROTATION:
      return structureCreate( template.type )
    case EXERCICE_RUNNING:
    case EXERCICE_WORKOUT:
      return exerciceCreate( template.type )
  }
}
