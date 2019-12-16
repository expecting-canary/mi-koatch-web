import React from 'react'
import {
  EXERCICE_RUNNING,
  EXERCICE_WORKOUT,
  IItem,
  IItemData,
  STRUCTURE_ROTATION,
  STRUCTURE_SERIE,
  STRUCTURE_SESSION,
} from 'src/types'

import { ExerciceWorkout } from './exercices'
import { StructureSerie, StructureSession } from './structures'

export function Item( {
  item,
}: {
  item: IItem | IItemData,
} ): JSX.Element | null {
  switch( item.type ) {
    case STRUCTURE_SESSION:
      return <StructureSession session={item} />
    case STRUCTURE_SERIE:
      return <StructureSerie serie={item} />
    case STRUCTURE_ROTATION:
      return <span>Rotation</span>
    case EXERCICE_RUNNING:
      return <span>Running</span>
    case EXERCICE_WORKOUT:
      return <ExerciceWorkout workout={item} />
  }
}
