import { IStructureSession, Progress, Thunk } from 'src/models'
import {
  itemActionStart,
  itemActionStop,
  itemActionUpdate,
  itemThunkCreate,
  itemThunkNext,
  switchStructureExercice,
} from 'src/state'

export function structureSessionThunkStart(
  session: IStructureSession,
): Thunk<Progress> {
  return function( dispatch ) {
    dispatch( itemActionStart( session.id ) )

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
    dispatch( itemActionStop( session.id ) )
    return 'DONE'
  }
}

function contentStart(
  session: IStructureSession,
  index: number,
): Thunk<Progress> {
  return function( dispatch ) {
    const item = dispatch( itemThunkCreate( session.content[ index ], true ) )
    dispatch(
      itemActionUpdate( session.id, {
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
      () => dispatch( itemThunkNext( id ) ),
      () => {
        dispatch( itemActionStop( id ) )
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
    dispatch( itemActionStop( session.id ) )
    return 'DONE'
  }
}
