import { STRUCTURE_SERIE } from 'src/constants'
import { itemCreateBase } from 'src/state'
import { IStructureSerie } from 'src/types'

export function itemSerieCreate(
  template: Partial<IStructureSerie> = {},
): IStructureSerie {
  return {
    rest: 90,
    series: 4,
    content: '',
    ...template,
    ...itemCreateBase( STRUCTURE_SERIE, template.name ),
    results: [],
  }
}
