import { Exercice, ExerciceData, Thunk } from 'src/models';
import { exerciceActionAdd, exerciceActionStart, exerciceCreate } from 'src/state';

export function exerciceThunkCreate( data: ExerciceData, start = false ): Thunk<Exercice> {
  return function( dispatch ) {
    const exercice = exerciceCreate( data );
    dispatch( exerciceActionAdd( exercice ) );
    if( start ) {
      dispatch( exerciceActionStart( exercice.id ) );
    }
    return exercice;
  };
}
