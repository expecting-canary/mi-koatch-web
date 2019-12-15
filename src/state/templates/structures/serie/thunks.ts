import { IStructureSerie, Progress, Thunk } from 'src/models'
import {
  itemActionStart,
  itemActionStop,
  itemActionUpdate,
  itemThunkCreate,
} from 'src/state'

export function structureSerieThunkStart(
  serie: IStructureSerie,
): Thunk<Progress> {
  return function( dispatch ) {
    dispatch( itemActionStart( serie.id ) )

    return dispatch( structureSerieThunkNextStep( serie ) )
  }
}

export function structureSerieThunkNextStep(
  serie: IStructureSerie,
): Thunk<Progress> {
  return function( dispatch ) {
    const { id, content, result, series } = serie
    const index = result.length - 1
    if( index >= 0 ) {
      // If ongoing item :
      const [ item, rest ] = result[ index ]
      const nextResult = [ ...result ]
      if( rest === 0 ) {
        // If no rest in ongoing item, start rest
        nextResult[ index ] = [ item, Date.now() ]
        dispatch( itemActionUpdate( id, { result: nextResult } ) )

        return 'ONGOING'
      } else {
        // Else stop item
        nextResult[ index ] = [ item, Date.now() - rest ]
        dispatch( itemActionUpdate( id, { result: nextResult } ) )
        dispatch( itemActionStop( item ) )
      }
    }
    if( result.length < series ) {
      // If item not completed, start next serie
      const item = dispatch( itemThunkCreate( content ) )
      dispatch( itemActionUpdate( id, { result: [ ...result, [ item.id, 0 ] ] } ) )

      return 'ONGOING'
    } else {
      // Else stop the serie
      dispatch( structureSerieThunkStop( serie ) )

      return 'DONE'
    }
  }
}

export function structureSerieThunkStop( serie: IStructureSerie ): Thunk {
  return function( dispatch ) {
    dispatch( itemActionStop( serie.id ) )
  }
}
