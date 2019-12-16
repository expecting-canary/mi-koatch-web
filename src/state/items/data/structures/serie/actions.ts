import { dataStart, dataStop, itemThunkCreate, itemUpdate } from 'src/state'
import {
  IStructureSerieData,
  IStructureSerieTemplate,
  Progress,
  Thunk,
} from 'src/types'
import { find } from 'src/util'

import { getTemplates } from '../../../selectors'

export function serieStart( serie: IStructureSerieData ): Thunk<Progress> {
  return function( dispatch ) {
    dispatch( dataStart( serie.id ) )
    return dispatch( serieNextStep( serie ) )
  }
}

export function serieNextStep( serie: IStructureSerieData ): Thunk<Progress> {
  return function( dispatch, getState ) {
    const template = find(
      getTemplates( getState() ),
      serie.template,
    ) as IStructureSerieTemplate
    const { id, content, series } = serie
    const index = content.length - 1

    if( index >= 0 ) {
      const [ item, rest ] = content[ index ]
      const nextResult = [ ...content ]
      if( rest === 0 ) {
        // If no rest in ongoing item, start rest
        nextResult[ index ] = [ item, Date.now() ]
        dispatch( itemUpdate( id, { content: nextResult } ) )
        return 'ONGOING'
      } else {
        // Else stop item
        nextResult[ index ] = [ item, Date.now() - rest ]
        dispatch( itemUpdate( id, { content: nextResult } ) )
        dispatch( dataStop( item ) )
      }
    }

    if( content.length < series ) {
      // If item not completed, start next serie
      const item = dispatch( itemThunkCreate( template.content ) )
      dispatch( itemUpdate( id, { content: [ ...content, [ item.id, 0 ] ] } ) )
      return 'ONGOING'
    } else {
      dispatch( serieStop( serie ) )
      return 'DONE'
    }
  }
}

export function serieStop( serie: IStructureSerie ): Thunk {
  return function( dispatch ) {
    dispatch( dataStop( serie.id ) )
  }
}
