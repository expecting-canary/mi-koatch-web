import {
  EXERCICE_RUNNING,
  EXERCICE_WORKOUT,
  IItem,
  IItemBase,
  IItemType,
  IProgress,
  PROGRESS_TODO,
  STRUCTURE_ROTATION,
  STRUCTURE_SERIE,
  STRUCTURE_SESSION,
} from 'src/types'
import uuid from 'uuid'

import { createStructureSerie } from './structures'

export function hasState( structure: IItem, ...states: IProgress[] ) {
  return states.includes( structure.state )
}

export function createBase<Type extends IItemType>(
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

export function createItem( data: IItemType | IItem ): IItem {
  const template = ( typeof data === 'string' ? { type: data } : data ) as IItem
  switch( template.type ) {
    case STRUCTURE_SESSION:
      break;
    case STRUCTURE_SERIE:
      return createStructureSerie( template );
    case STRUCTURE_ROTATION:
      return structureCreate( type )
    case EXERCICE_RUNNING:
    case EXERCICE_WORKOUT:
      return exerciceCreate( type )
  }
}
