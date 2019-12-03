import React, { useEffect } from 'react';
import { useTimerHM_MS } from 'src/common/timer';
import { ISession } from 'src/workout/types';
import { TimerControls } from 'react-compound-timer';
import { useSessionContext } from './context';

export function SessionTimer() {
  const session = useSessionContext();
  const [value, controls] = useTimerHM_MS(0, false);
  useEffect(() => controlTimer(session, controls), [session, controls]);
  return <span>{value}</span>;
}

function controlTimer({ state, start, stop }: ISession, controls: TimerControls) {
  switch (state) {
    case 'TODO':
      controls.stop();
      controls.setTime(0);
      break;
    case 'ONGOING':
      controls.start();
      controls.setTime(Date.now() - start.getTime());
      break;
    case 'DONE':
      controls.stop();
      controls.setTime(stop.getTime() - start.getTime());
      break;
  }
}
