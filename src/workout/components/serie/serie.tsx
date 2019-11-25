import React from 'react';
import { SerieAction } from './actions';
import { SerieEdit } from './edit';
import { SerieTimer } from './timer';

export function Serie({ serie }: { serie: Serie.Type }) {
  const editable = serie.state !== 'ONGOING';
  return (
    <div>
      {editable && <SerieEdit state={serie} />}
      <SerieAction state={serie.state} />
      <SerieTimer state={serie} />
    </div>
  );
}
