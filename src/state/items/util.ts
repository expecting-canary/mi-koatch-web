import {
  EXERCICE_RUNNING,
  EXERCICE_WORKOUT,
  IItem,
  IItemBase,
  STRUCTURE_ROTATION,
  STRUCTURE_SERIE,
  STRUCTURE_SESSION,
  Types,
} from 'src/types'
import uuid from 'uuid'

import { exerciceCreate } from './data/exercices'
import { structureCreate } from './data/structures'

export function itemCreateBase(): IItemBase {
  return {
    id: uuid.v4(),
    tags: [],
    name: '',
  }
}

export function itemCreate( type: Types ): IItem {
  switch( type ) {
    case STRUCTURE_SESSION:
    case STRUCTURE_SERIE:
    case STRUCTURE_ROTATION:
      return structureCreate( type )
    case EXERCICE_RUNNING:
    case EXERCICE_WORKOUT:
      return exerciceCreate( type )
  }
}
