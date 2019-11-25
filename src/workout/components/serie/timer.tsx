import React from 'react';
import { Timer } from '../common/timer';

export function SerieTimer({ state: { state, start, rest } }: { state: Serie.Type }) {
  switch (state) {
    case 'TODO':
      return <Timer running={false} />;
    case 'ONGOING':
      return <Timer start={start} />;
    case 'RESTING':
      return <Timer start={rest} />;
  }
  return null;
}
