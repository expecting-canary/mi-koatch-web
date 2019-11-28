import React from 'react';
import { Timer } from '../common/timer';
import { ISession } from 'src/workout/models/models';

export function SessionTimer({ state: { state, start, stop } }: { state: ISession }) {
  switch (state) {
    case 'TODO':
      return <Timer running={false} />;
    case 'ONGOING':
      return <Timer start={start} />;
    case 'DONE':
      return <Timer start={new Date(stop.getTime() - start.getTime())} running={false} />;
  }
  return null;
}
