import React from 'react';
import { Exercice as Model } from 'src/workout/models';
import { ExerciceEdit } from './edit';
import { SerieList } from './list';
import { ExerciceContextProvider } from '../../providers/exercice';

export function Exercice({ exercice }: { exercice: Model }) {
  return (
    <div>
      <ExerciceContextProvider exercice={exercice}>
        <ExerciceEdit />
        <SerieList />
      </ExerciceContextProvider>
    </div>
  );
}
