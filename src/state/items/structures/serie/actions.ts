import { PROGRESS_DONE, PROGRESS_ONGOING } from 'src/constants'
import { itemActionCreate, itemStart, itemStop, itemUpdate } from 'src/state'
import { IProgress, IStructureSerie, Thunk } from 'src/types'
import { find } from 'src/util'

export function serieStart( serie: IStructureSerie ): Thunk<IProgress> {
  return function( dispatch ) {
    dispatch( itemStart( serie.id ) )
    return dispatch( serieNextStep( serie ) )
  }
}

export function serieNextStep( serie: IStructureSerie ): Thunk<IProgress> {
  return function( dispatch, getState ) {
    const { id, results, content, series } = serie
    const index = results.length - 1

    if( index >= 0 ) {
      const [ item, rest ] = results[ index ]
      const nextResult = [ ...results ]
      if( rest === 0 ) {
        // If no rest in ongoing item, start rest
        nextResult[ index ] = [ item, Date.now() ]
        dispatch( itemUpdate( id, { results: nextResult } ) )
        return 'ONGOING'
      } else {
        // Else stop item
        nextResult[ index ] = [ item, Date.now() - rest ]
        dispatch( itemUpdate( id, { results: nextResult } ) )
        dispatch( itemStop( item ) )
      }
    }

    if( content.length < series ) {
      // If item not completed, start next serie
      const template = find( getState().items, serie.content )
      const item = dispatch( itemActionCreate( template, true ) )
      dispatch( itemUpdate( id, { results: [ ...results, [ item.id, 0 ] ] } ) )
      return PROGRESS_ONGOING
    } else {
      dispatch( serieStop( serie ) )
      return PROGRESS_DONE
    }
  }
}

export function serieStop( serie: IStructureSerie ): Thunk {
  return dispatch => dispatch( itemStop( serie.id ) )
}
