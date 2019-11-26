import React from 'react';
import { IExercice } from '../../models/exercice';
import { ExerciceEdit } from './edit';
import { ExerciceTimer } from './timer';

export function Exercice({ exercice }: { exercice: IExercice }) {
  return (
    <div>
      <ExerciceEdit exercice={exercice} />
      <ExerciceTimer state={exercice} />
    </div>
  );
}
