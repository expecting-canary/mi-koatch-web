import {
  EXERCICE_RUNNING,
  EXERCICE_WORKOUT,
  ITemplate,
  STRUCTURE_ROTATION,
  STRUCTURE_SERIE,
  STRUCTURE_SESSION,
  Types,
} from 'src/types'
import uuid from 'uuid'

import { serieTemplateCreate } from './structures/serie'
import { sessionTemplateCreate } from './structures/session'

export function templateCreateBase( root?: true ) {
  return root ? { id: uuid.v4(), name: '', root } : { id: uuid.v4(), name: '' }
}

export function templateCreate( type: Types, root?: true ): ITemplate {
  switch( type ) {
    case STRUCTURE_SESSION:
      return sessionTemplateCreate( root );
    case STRUCTURE_SERIE:
      return serieTemplateCreate( root );
    case STRUCTURE_ROTATION:
    case EXERCICE_RUNNING:
    case EXERCICE_WORKOUT:
  }
  return serieTemplateCreate( root );
}
