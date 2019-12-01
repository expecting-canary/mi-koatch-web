import React from 'react';
import { IExercice } from 'src/workout/types';
import { ExerciceEdit } from './edit';
import { SerieList } from './list';

export function Exercice({ exercice }: { exercice: IExercice }) {
  return (
    <div>
      <ExerciceEdit exercice={exercice} />
      {SerieList(exercice)}
    </div>
  );
}
