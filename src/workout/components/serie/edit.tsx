import React from 'react';
import FlexView from 'react-flexview/lib';
import { NumberPicker } from 'src/common/picker/number/number';
import { UseWorkout } from 'src/workout/state';
import { ISerie, SerieEditable } from 'src/workout/types';
import { useSerieContext } from './context';

function useUpdate(serie: ISerie, key: SerieEditable) {
  const updateSerie = UseWorkout.dispatch.update.serie();
  return (value: number) => updateSerie({ id: serie.id, [key]: value });
}

export function SerieEdit() {
  const serie = useSerieContext();
  const weightChange = useUpdate(serie, 'weight');
  const repsChange = useUpdate(serie, 'repetitions');

  return (
    <FlexView column grow>
      {SerieEditItem('Poids', serie.weight, weightChange)}
      {SerieEditItem('Répétitions', serie.repetitions, repsChange)}
    </FlexView>
  );
}

function SerieEditItem(label: string, value: number, setValue: (value: number) => void) {
  return (
    <FlexView column grow>
      {label} :
      <NumberPicker value={value} setValue={setValue} />
    </FlexView>
  );
}
