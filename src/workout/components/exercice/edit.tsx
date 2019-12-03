import React from 'react';
import { NumberPicker } from 'src/common/picker/number';
import { UseWorkout } from 'src/workout/state';
import { ExerciceEditable, IExercice } from 'src/workout/types';
import { useExerciceContext } from './context';

export function ExerciceEdit() {
  const exercice = useExerciceContext();
  const active = exercice.state === 'TODO';
  const serieActive = active || exercice.state === 'ONGOING';
  const serieMin = exercice.result.length;
  return (
    <div>
      <ExerciceEditItem active={serieActive} prop={'series'} min={serieMin}>
        Series
      </ExerciceEditItem>
      <ExerciceEditItem active={active} prop={'rest'} min={0} step={5}>
        Repos
      </ExerciceEditItem>
      <ExerciceEditItem active={active} prop={'weight'} min={0}>
        Poids
      </ExerciceEditItem>
      <ExerciceEditItem active={active} prop={'repetitions'} min={0}>
        Répétitions
      </ExerciceEditItem>
    </div>
  );
}

type EditProps = {
  children: string;
  prop: ExerciceEditable;
  active: boolean;
  min?: number;
  step?: number;
};

function useUpdate(exercice: IExercice, key: ExerciceEditable) {
  const dispatch = UseWorkout.dispatch.update.exercice();
  return function onChange(value: number) {
    dispatch({ id: exercice.id, [key]: value });
  };
}

function ExerciceEditItem({ children, prop, active, min, step }: EditProps) {
  const exercice = useExerciceContext();
  const onChange = useUpdate(exercice, prop);
  const value = exercice[prop];
  return (
    <div>
      {children}
      <NumberPicker {...{ value, onChange, min, step, disabled: !active }} />
    </div>
  );
}
