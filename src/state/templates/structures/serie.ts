import { IStructureSerieTemplate, STRUCTURE_SERIE } from 'src/types'

import { templateCreateBase } from '../util'

export function serieTemplateCreate( root?: true ): IStructureSerieTemplate {
  return {
    ...templateCreateBase( root ),
    type: STRUCTURE_SERIE,
    rest: 90,
    series: 4,
    content: '',
  }
}
