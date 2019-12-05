import React from 'react';
import FlexView from 'react-flexview/lib';
import { ISerie } from 'src/workout/types';
import { SerieAction } from './actions';
import { SerieContextProvider } from './context';
import { SerieEdit } from './edit';

export function Serie({ serie }: { serie: ISerie }) {
  const editable = serie.state !== 'ONGOING';
  return (
    <SerieContextProvider serie={serie}>
      <FlexView column>
        <SerieAction />
        <FlexView grow>{editable && <SerieEdit />}</FlexView>
      </FlexView>
    </SerieContextProvider>
  );
}
