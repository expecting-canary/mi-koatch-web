import { STRUCTURE_SERIE } from 'src/constants'
import { createBase } from 'src/state'
import { IStructureSerie } from 'src/types'

export function createSerie(
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
