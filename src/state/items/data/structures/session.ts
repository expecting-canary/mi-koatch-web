import {
  dataStart,
  dataStop,
  itemThunkCreate,
  itemThunkNext,
  itemUpdate,
  switchStructureExercice,
} from 'src/state'
import { IStructureSessionData as Data, Progress, Thunk } from 'src/types'

export function sessionStart( session: Data ): Thunk<Progress> {
  return function( dispatch ) {
    dispatch( dataStart( session.id ) )
    return dispatch( sessionNext( session ) )
  }
}

export function sessionNext( session: Data ): Thunk<Progress> {
  return function( dispatch ) {
    if( session.state !== 'DONE' ) {
      return 'DONE'
    }
    const index = session.content.length
    if( index > 0 ) {
      const state = dispatch( contentNext( session, index ) )
      if( state !== 'DONE' ) {
        return 'ONGOING'
      }
    }
    if( session.content[ index + 1 ] ) {
      return dispatch( contentStart( session, index + 1 ) )
    }
    return dispatch( dataStop( session.id ) )
  }
}

function contentStart( session: Data, index: number ): Thunk<Progress> {
  return function( dispatch ) {
    const item = dispatch( itemThunkCreate( session.content[ index ], true ) )
    const content = [ ...session.content, item.id ]
    dispatch( itemUpdate( session.id, { content } ) )
    return 'ONGOING'
  }
}

function contentNext( session: Data, index: number ): Thunk<Progress> {
  const id = session.content[ index ]
  return dispatch =>
    switchStructureExercice(
      session.content[ index ],
      () => dispatch( itemThunkNext( id ) ),
      () => dispatch( dataStop( id ) ),
    )
}

export function sessionStop( session: Data ): Thunk<Progress> {
  return dispatch => dispatch( dataStop( session.id ) )
}
