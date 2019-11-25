import React from 'react';
import { IExercice } from '../../models/exercice.type';
import { ExerciceAction } from './actions';
import { ExerciceEdit } from './edit';
import { ExerciceTimer } from './timer';

export function Exercice({ exercice }: { exercice: IExercice }) {
  return (
    <div>
      <ExerciceEdit exercice={exercice} />
      <ExerciceAction state={exercice.state} />
      <ExerciceTimer state={exercice} />
    </div>
  );
}
