import React from 'react';
import FlexView from 'react-flexview/lib';
import { NumberPicker } from 'src/common/picker/number/number';
import { useSerieContext } from './context';
import { SerieEditable } from 'src/workout/types';
import { useLangage } from 'src/common/langage/context';

export function SerieEdit() {
  return (
    <FlexView column grow>
      <SerieEditItem field="weight" />
      <SerieEditItem field="repetitions" />
    </FlexView>
  );
}

function SerieEditItem({ field: key }: { field: SerieEditable }) {
  const { serie, update } = useSerieContext();
  const langage = useLangage();
  return (
    <FlexView column grow>
      {langage.labels[key]} :
      <NumberPicker value={serie[key]} setValue={update[key]} />
    </FlexView>
  );
}
