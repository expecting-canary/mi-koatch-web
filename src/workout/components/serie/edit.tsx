import React from 'react';
import FlexView from 'react-flexview/lib';
import { NumberPicker } from 'src/common/picker/number';
import { UseWorkout } from 'src/workout/state';
import { ISerie, SerieEditable } from 'src/workout/types';

function useUpdate(serie: ISerie, key: SerieEditable) {
  const updateSerie = UseWorkout.dispatch.update.serie();
  return (value: number) => updateSerie({ id: serie.id, [key]: value });
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
