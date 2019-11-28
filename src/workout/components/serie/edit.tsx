import React from 'react';
import { NumberPicker } from '../common/picker/number';
import { useDispatch } from 'react-redux';
import { WorkoutDispatch } from '../../redux/store';
import { ISerie, SerieEditable } from '../../models';
import FlexView from 'react-flexview/lib';

function useUpdate(serie: ISerie, key: SerieEditable) {
  const dispatch = useDispatch() as WorkoutDispatch;
  return function onChange(value: number) {
    dispatch({ type: 'SERIE_UPDATE', payload: { id: serie.id, [key]: value } });
  };
}

export function SerieEdit({ state }: { state: ISerie }) {
  const weightChange = useUpdate(state, 'weight');
  const repsChange = useUpdate(state, 'repetitions');

  return (
    <FlexView column grow>
      {SerieEditItem('Poids', state.weight, weightChange)}
      {SerieEditItem('Répétitions', state.repetitions, repsChange)}
    </FlexView>
  );
}

function SerieEditItem(label: string, value: number, onChange: (value: number) => void) {
  return (
    <FlexView column grow>
      {label} :
      <NumberPicker value={value} onChange={onChange} />
    </FlexView>
  );
}
