import { EXERCICE, IExercice, IExerciceBase, IExerciceData } from 'src/types'
import uuid from 'uuid'

export function isExercice( exercice: any ) {
  return (
    typeof exercice === 'object' &&
    typeof exercice.type === 'string' &&
    exercice.type.includes( EXERCICE )
  )
}

export function exerciceHasState(
  exercice: IExercice,
  ...states: Array<IExercice[ 'state' ]>
) {
  return states.includes( exercice.state )
}

function exerciceCreateBase(): IExerciceBase {
  return {
    id: uuid.v4(),
    state: 'TODO',
    start: 0,
    stop: 0,
  }
}

export function exerciceCreate( data: IExerciceData ): IExercice {
  return { ...exerciceCreateBase(), ...data }
}
