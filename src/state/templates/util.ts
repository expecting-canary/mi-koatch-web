import {
  EXERCICE_RUNNING,
  EXERCICE_WORKOUT,
  IItem,
  IItemBase,
  IItemData,
  STRUCTURE_ROTATION,
  STRUCTURE_SERIE,
  STRUCTURE_SESSION,
} from 'src/models'
import uuid from 'uuid'

import { exerciceCreate } from './exercices'
import { structureCreate } from './structures'

export function itemHasState(
  item: IItem,
  ...states: Array<IItem[ 'state' ]>
) {
  return states.includes( item.state )
}

export function itemCreateBase(): IItemBase {
  return {
    id: uuid.v4(),
    state: 'TODO',
    start: 0,
    stop: 0,
  }
}

export function itemCreate( data: IItemData ): IItem {
  switch( data.type ) {
    case STRUCTURE_SESSION:
    case STRUCTURE_SERIE:
    case STRUCTURE_ROTATION:
      return structureCreate( data )
    case EXERCICE_RUNNING:
    case EXERCICE_WORKOUT:
      return exerciceCreate( data )
  }
}
