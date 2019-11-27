import React from 'react';
import { NumberPicker } from '../common/picker/number';
import { useDispatch } from 'react-redux';
import { WorkoutDispatch } from '../../redux/workout';
import { ISerie, SerieEditable } from '../../models';

export function SerieEdit({ state }: { state: ISerie }) {
  return (
    <div>
      <SerieEditItem label={'Poids'} serie={state} key={'weight'} />
      <SerieEditItem label={'Répétitions'} serie={state} key={'repetitions'} />
    </div>
  );
}

function SerieEditItem({ label, serie, key }: { label: string; serie: ISerie; key: SerieEditable }) {
  const dispatch = useDispatch() as WorkoutDispatch;
  function onChange(value: number) {
    dispatch({ type: 'SERIE_UPDATE', payload: { id: serie.id, [key]: value } });
  }
  return (
    <div>
      {label} :
      <NumberPicker value={serie[key]} onChange={onChange} />
    </div>
  );
}
