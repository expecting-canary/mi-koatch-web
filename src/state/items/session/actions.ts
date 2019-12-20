import { PROGRESS_DONE, PROGRESS_ONGOING } from 'src/constants'
import {
  itemActionCreate,
  itemActionNext,
  itemStart,
  itemStop,
  itemUpdate,
} from 'src/state'
import { IProgress, IStructureSession as Data, Thunk } from 'src/types'
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
        const state = dispatch( itemActionNext( session.content[ index ] ) )
        if( state !== PROGRESS_DONE ) {
          return PROGRESS_ONGOING
        }
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
    const content = dispatch( itemActionCreate( template, true ) )
    dispatch(
      itemUpdate( session.id, { content: [ ...session.content, content.id ] } ),
    )
    return PROGRESS_ONGOING
  }
}

export function sessionStop( session: Data ): Thunk<IProgress> {
  return dispatch => dispatch( itemStop( session.id ) )
}
