import { PROGRESS_DONE, PROGRESS_ONGOING } from 'src/constants'
import { itemUpdate } from 'src/state'
import { ID, IProgress, Thunk } from 'src/types'

export function dataStart( id: ID ): Thunk<IProgress> {
  return function( dispatch ) {
    dispatch( itemUpdate( id, {
      state: PROGRESS_ONGOING,
      start: Date.now(),
    } ) )
    return PROGRESS_ONGOING
  }
}

export function dataStop( id: ID ): Thunk<IProgress> {
  return function( dispatch ) {
    dispatch( itemUpdate( id, {
      state: PROGRESS_DONE,
      stop: Date.now(),
    } ) )
    return PROGRESS_DONE
  }
}
