import { IExercice, IExerciceData, Thunk } from 'src/models'
import { exerciceActionAdd, exerciceActionStart, exerciceCreate } from 'src/state'

export function exerciceThunkCreate( data: IExerciceData, start = false ): Thunk<IExercice> {
  return function( dispatch ) {
    const exercice = exerciceCreate( data );
    dispatch( exerciceActionAdd( exercice ) );
    if( start ) {
      dispatch( exerciceActionStart( exercice.id ) );
    }
    return exercice;
  };
}
