import React from 'react';
import FlexView from 'react-flexview/lib';
import { SerieAction } from './actions';
import { SerieContextProvider } from '../../providers/serie';
import { SerieEdit } from './edit';
import { Serie as Model } from 'src/workout/models';

export function Serie({ serie }: { serie: Model }) {
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
