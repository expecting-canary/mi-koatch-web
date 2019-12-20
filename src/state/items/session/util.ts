import { STRUCTURE_SESSION } from 'src/constants'
import { itemCreateBase } from 'src/state'
import { IStructureSession } from 'src/types'

export function itemSessionCreate(
  template: Partial<IStructureSession> = {},
): IStructureSession {
  return {
    content: [],
    ...template,
    ...itemCreateBase( STRUCTURE_SESSION, template.name ),
    results: [],
  }
}
