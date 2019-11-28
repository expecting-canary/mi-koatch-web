import React from 'react';
import { useDispatch } from 'react-redux';
import { IExercice, ExerciceEditable } from '../../models';
import { WorkoutDispatch } from '../../redux/store';
import { NumberPicker } from '../common/picker/number';

function useUpdate(exercice: IExercice, key: ExerciceEditable) {
  const dispatch = useDispatch() as WorkoutDispatch;
  return function onChange(value: number) {
    dispatch({ type: 'EXERCICE_UPDATE', payload: { id: exercice.id, [key]: value } });
  };
}

export function ExerciceEdit({ exercice }: { exercice: IExercice }) {
  const serieChange = useUpdate(exercice, 'series');
  const restChange = useUpdate(exercice, 'rest');
  const weightChange = useUpdate(exercice, 'weight');
  const repsChange = useUpdate(exercice, 'repetitions');
  
  return (
    <div>
      {ExerciceEditItem('Series', exercice.series, serieChange)}
      {ExerciceEditItem('Repos', exercice.rest, restChange)}
      {ExerciceEditItem('Poids', exercice.weight, weightChange)}
      {ExerciceEditItem('Répétitions', exercice.repetitions, repsChange)}
    </div>
  );
}

function ExerciceEditItem(label: string, value: number, onChange: (value: number) => void) {
  return (
    <div>
      {label} :
      <NumberPicker value={value} onChange={onChange} />
    </div>
  );
}
