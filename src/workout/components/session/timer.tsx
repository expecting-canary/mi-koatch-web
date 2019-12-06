import React, { useEffect } from 'react';
import { useTimerHM_MS } from 'src/common/timer';
import { ISession } from 'src/workout/types';
import { TimerControls } from 'react-compound-timer';
import { useSessionContext } from './context';
import { flatSwitch } from 'src/util';

export function SessionTimer() {
  const { session } = useSessionContext();
  const [value, controls] = useTimerHM_MS(0, false);
  useEffect(() => controlTimer(session, controls), [session, controls]);
  return <span>{value}</span>;
}

function controlTimer({ state, start, stop }: ISession, controls: TimerControls) {
  flatSwitch(state, {
    TODO() {
      controls.stop();
      controls.setTime(0);
    },
    ONGOING() {
      controls.start();
      controls.setTime(Date.now() - start.getTime());
    },
    DONE() {
      controls.stop();
      controls.setTime(stop.getTime() - start.getTime());
    }
  });
}
