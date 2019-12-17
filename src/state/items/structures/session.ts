import {
  itemCreate as itemCreate,
  itemStart,
  itemStop,
  itemThunkNext,
  itemUpdate,
  switchStructureExercice,
} from 'src/state'
import {
  IProgress,
  IStructureSession as Data,
  PROGRESS_DONE,
  PROGRESS_ONGOING,
  Thunk,
} from 'src/types'
import { find } from 'src/util'

export function sessionStart( session: Data ): Thunk<IProgress> {
  return dispatch => {
    dispatch( itemStart( session.id ) )
    return dispatch( sessionNext( session ) )
  }
}

export function sessionNext( session: Data ): Thunk<IProgress> {
  return dispatch => {
    if( session.state !== PROGRESS_DONE ) {
      const index = session.content.length
      if( index > 0 ) {
        const state = dispatch( contentNext( session, index ) )
        if( state !== 'DONE' ) { return PROGRESS_ONGOING }
      }
      if( session.content[ index + 1 ] ) {
        return dispatch( contentStart( session, index + 1 ) )
      }
      return dispatch( itemStop( session.id ) )
    }
    return PROGRESS_DONE
  }
}

function contentStart( session: Data, index: number ): Thunk<IProgress> {
  return ( dispatch, getState ) => {
    const template = find( getState().items, session.content[ index ] )
    const item = dispatch( itemCreate( template, true ) )
    const content = [ ...session.content, item.id ]
    dispatch( itemUpdate( session.id, { content } ) )
    return PROGRESS_ONGOING
  }
}

function contentNext( session: Data, index: number ): Thunk<IProgress> {
  const id = session.content[ index ]
  return dispatch =>
    switchStructureExercice(
      session.content[ index ],
      () => dispatch( itemThunkNext( id ) ),
      () => dispatch( itemStop( id ) ),
    )
}

export function sessionStop( session: Data ): Thunk<IProgress> {
  return dispatch => dispatch( itemStop( session.id ) )
}
