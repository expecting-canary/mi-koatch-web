import { IStructureSession, Progress, Thunk } from 'src/models'
import {
  exerciceActionStop,
  exerciceThunkCreate,
  structureActionStart,
  structureActionStop,
  structureActionUpdate,
  structureThunkCreate,
  structureThunkNext,
  switchStructureExercice,
} from 'src/state'

export function structureSessionThunkStart(
  session: IStructureSession,
): Thunk<Progress> {
  return function( dispatch ) {
    dispatch( structureActionStart( session.id ) )

    return dispatch( structureSessionThunkNext( session ) )
  }
}

export function structureSessionThunkNext(
  session: IStructureSession,
): Thunk<Progress> {
  return function( dispatch ) {
    if( session.state !== 'DONE' ) {
      return 'DONE'
    }
    const index = session.result.length
    if( index > 0 ) {
      const state = dispatch( contentNext( session, index ) )
      if( state !== 'DONE' ) {
        return 'ONGOING'
      }
    }
    if( session.content[ index + 1 ] ) {
      return dispatch( contentStart( session, index + 1 ) )
    }
    dispatch( structureActionStop( session.id ) )
    return 'DONE'
  }
}

function contentStart(
  session: IStructureSession,
  index: number,
): Thunk<Progress> {
  return function( dispatch ) {
    const item = switchStructureExercice(
      session.content[ index ],
      structureData => dispatch( structureThunkCreate( structureData, true ) ),
      exerciceData => dispatch( exerciceThunkCreate( exerciceData, true ) ),
    )
    dispatch(
      structureActionUpdate( session.id, {
        result: [ ...session.result, item.id ],
      } ),
    )
    return 'ONGOING'
  }
}

function contentNext(
  session: IStructureSession,
  index: number,
): Thunk<Progress> {
  return function( dispatch ) {
    const id = session.result[ index ]
    const state = switchStructureExercice(
      session.content[ index ],
      () => dispatch( structureThunkNext( id ) ),
      () => {
        dispatch( exerciceActionStop( id ) )

        return 'DONE' as Progress
      },
    )
    return state
  }
}

export function structureSessionThunkStop(
  session: IStructureSession,
): Thunk<Progress> {
  return function( dispatch ) {
    dispatch( structureActionStop( session.id ) )
    return 'DONE'
  }
}
