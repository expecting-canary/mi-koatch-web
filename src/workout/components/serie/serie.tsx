import React from 'react';
import FlexView from 'react-flexview/lib';
import { ISerie } from '../../models/models';
import { SerieAction } from './actions';
import { SerieEdit } from './edit';

export function Serie({ serie }: { serie: ISerie }) {
  const editable = serie.state !== 'ONGOING';
  return (
    <FlexView column>
      <SerieAction state={serie.state} />
      <FlexView grow>{editable && <SerieEdit state={serie} />}</FlexView>
    </FlexView>
  );
}
