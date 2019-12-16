import {
  EXERCICE_RUNNING,
  EXERCICE_WORKOUT,
  IExerciceData,
  IStructureData,
  STRUCTURE_ROTATION,
  STRUCTURE_SERIE,
  STRUCTURE_SESSION,
} from 'src/types'

export function switchStructureExercice<R1, R2>(
  data: IStructureData | IExerciceData,
  structureCallback: ( data: IStructureData ) => R1,
  exerciceCallback: ( data: IExerciceData ) => R2,
): R1 | R2 {
  switch( data.type ) {
    case STRUCTURE_SESSION:
    case STRUCTURE_SERIE:
    case STRUCTURE_ROTATION:
      return structureCallback( data )
    case EXERCICE_RUNNING:
    case EXERCICE_WORKOUT:
      return exerciceCallback( data )
  }
}
