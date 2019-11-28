import React from 'react';
import { useDispatch } from 'react-redux';
import { IExercice, ExerciceEditable } from '../../models';
import { WorkoutDispatch } from '../../redux/store';
import { NumberPicker } from '../common/picker/number';

export function ExerciceEdit({ exercice }: { exercice: IExercice }) {
  return (
    <div>
      <ExerciceEditItem label={'Series'} exercice={exercice} key={'series'} />
      <ExerciceEditItem label={'Repos'} exercice={exercice} key={'rest'} />
      <ExerciceEditItem label={'Poids'} exercice={exercice} key={'weight'} />
      <ExerciceEditItem label={'Répétitions'} exercice={exercice} key={'repetitions'} />
    </div>
  );
}

function ExerciceEditItem({ label, exercice, key }: { label: string; exercice: IExercice; key: ExerciceEditable }) {
  const dispatch = useDispatch() as WorkoutDispatch;
  function onChange(value: number) {
    dispatch({ type: 'EXERCICE_UPDATE', payload: { id: exercice.id, [key]: value } });
  }
  return (
    <div>
      {label} :
      <NumberPicker value={exercice[key]} onChange={onChange} />
    </div>
  );
}
