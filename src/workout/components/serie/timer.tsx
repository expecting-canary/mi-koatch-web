import React from 'react';
import { Timer } from '../common/timer';
import { ISerie } from '../../models';

export function SerieTimer({ state: { state, start, rest, stop } }: { state: ISerie }) {
  switch (state) {
    case 'TODO':
      return <Timer running={false} />;
    case 'ONGOING':
      return <Timer start={start} />;
    case 'RESTING':
      return <Timer start={rest} />;
    case 'DONE':
      return <Timer start={new Date(stop.getTime() - start.getTime())} running={false} />;
  }
  return null;
}
