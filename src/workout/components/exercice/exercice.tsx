import React from 'react';
import { IExercice } from 'src/workout/types';
import { ExerciceEdit } from './edit';
import { SerieList } from './list';
import { ExerciceContext } from './context';

export function Exercice({ exercice }: { exercice: IExercice }) {
  return (
    <div>
      <ExerciceContext.Provider value={exercice}>
        <ExerciceEdit />
        <SerieList />
      </ExerciceContext.Provider>
    </div>
  );
}
