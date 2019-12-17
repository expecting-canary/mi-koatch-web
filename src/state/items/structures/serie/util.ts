import { IStructureSerie, STRUCTURE_SERIE } from 'src/types'

import { createBase } from '../../util'

export function createStructureSerie(
  template: Partial<IStructureSerie> = {},
): IStructureSerie {
  return {
    rest: 90,
    series: 4,
    content: '',
    ...template,
    ...createBase( STRUCTURE_SERIE, template.name ),
    results: [],
  }
}
