import { IStructureSessionTemplate, STRUCTURE_SESSION } from 'src/types'

import { templateCreateBase } from '../util'

export function sessionTemplateCreate( root?: true ): IStructureSessionTemplate {
  return {
    ...templateCreateBase( root ),
    type: STRUCTURE_SESSION,
    content: [],
  }
}
