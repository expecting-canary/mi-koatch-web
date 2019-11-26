import React from 'react';
import { SerieAction } from './actions';
import { SerieEdit } from './edit';
import { SerieTimer } from './timer';
import { ISerie } from '../../models/serie';

export function Serie({ serie }: { serie: ISerie }) {
  const editable = serie.state !== 'ONGOING';
  return (
    <div>
      {editable && <SerieEdit state={serie} />}
      <SerieAction state={serie.state} />
      <SerieTimer state={serie} />
    </div>
  );
}
