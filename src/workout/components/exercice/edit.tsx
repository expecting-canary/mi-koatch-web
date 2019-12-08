import React from 'react';
import { NumberPicker } from 'src/common/picker/number/number';
import { ExerciceEditable } from 'src/workout/models';
import { useExerciceContext } from '../../providers/exercice';

export function ExerciceEdit() {
  const { exercice } = useExerciceContext();
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

function ExerciceEditItem({ children, prop, active, min, step }: EditProps) {
  const { exercice, update } = useExerciceContext();
  return (
    <div>
      {children}
      <NumberPicker
        {...{ value: exercice[prop], setValue: update[prop], min, step, disabled: !active }}
      />
    </div>
  );
}
