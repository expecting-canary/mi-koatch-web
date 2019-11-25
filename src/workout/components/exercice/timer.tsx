import React from 'react';
import { IExercice } from '../../models/exercice.type';
import { Timer } from '../common/timer';

export function ExerciceTimer({ state: { state, start } }: { state: IExercice }) {
  switch (state) {
    case 'TODO':
      return <Timer running={false} />;
    case 'ONGOING':
      return <Timer start={start} />;
  }
  return null;
}
