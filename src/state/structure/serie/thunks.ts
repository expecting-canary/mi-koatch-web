import { IStructureSerie, Progress, Thunk } from 'src/models';
import {
  exerciceActionStop,
  exerciceThunkCreate,
  structureActionStart,
  structureActionStop,
  structureActionUpdate,
} from 'src/state';

export function structureSerieThunkStart(
  serie: IStructureSerie,
): Thunk<Progress> {
  return function( dispatch ) {
    dispatch( structureActionStart( serie.id ) );

    return dispatch( structureSerieThunkNextStep( serie ) );
  };
}

export function structureSerieThunkNextStep(
  serie: IStructureSerie,
): Thunk<Progress> {
  return function( dispatch ) {
    const { id, content, result, series } = serie;
    const index = result.length - 1;
    if( index >= 0 ) {
      // If ongoing exercice :
      const [ exercice, rest ] = result[ index ];
      const nextResult = [ ...result ];
      if( rest === 0 ) {
        // If no rest in ongoing exercice, start rest
        nextResult[ index ] = [ exercice, Date.now() ];
        dispatch( structureActionUpdate( id, { result: nextResult } ) )

        return 'ONGOING';
      } else {
        // Else stop exercice
        nextResult[ index ] = [ exercice, Date.now() - rest ];
        dispatch( structureActionUpdate( id, { result: nextResult } ) );
        dispatch( exerciceActionStop( exercice ) );
      }
    }
    if( result.length < series ) {
      // If exercice not completed, start next serie
      const exercice = dispatch( exerciceThunkCreate( content ) );
      dispatch( structureActionUpdate( id, { result: [ ...result, [ exercice.id, 0 ] ] } ) );

      return 'ONGOING';
    } else {
      // Else stop the serie
      dispatch( structureSerieThunkStop( serie ) );

      return 'DONE';
    }
  };
}

export function structureSerieThunkStop( serie: IStructureSerie ): Thunk {
  return function( dispatch ) {
    dispatch( structureActionStop( serie.id ) );
  };
}
