import React from 'react';
import { NumberPicker } from 'src/common/picker/number';
import { UseWorkout } from 'src/workout/state';
import { ExerciceEditable, IExercice } from 'src/workout/types';

export function ExerciceEdit({ exercice }: { exercice: IExercice }) {
  const active = exercice.state === 'TODO';
  const serieActive = active || exercice.state === 'ONGOING';
  const serieMin = exercice.result.length;
  return (
    <div>
      <ExerciceEditItem exercice={exercice} active={serieActive} prop={'series'} min={serieMin}>
        Series
      </ExerciceEditItem>
      <ExerciceEditItem exercice={exercice} active={active} prop={'rest'} min={0} step={5}>
        Repos
      </ExerciceEditItem>
      <ExerciceEditItem exercice={exercice} active={active} prop={'weight'} min={0}>
        Poids
      </ExerciceEditItem>
      <ExerciceEditItem exercice={exercice} active={active} prop={'repetitions'} min={0}>
        Répétitions
      </ExerciceEditItem>
    </div>
  );
}

type EditProps = {
  children: string;
  exercice: IExercice;
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

function ExerciceEditItem({ children, exercice, prop, active, min, step }: EditProps) {
  const onChange = useUpdate(exercice, prop);
  const value = exercice[prop];
  return (
    <div>
      {children}
      <NumberPicker {...{ value, onChange, min, step, disabled: !active }} />
    </div>
  );
}
