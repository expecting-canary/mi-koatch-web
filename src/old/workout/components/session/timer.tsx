import React, { useEffect } from 'react';
import { useTimerHM_MS } from 'src/common/timer';
import { Session } from 'src/workout/models';
import { TimerControls } from 'react-compound-timer';
import { useSessionContext } from '../../providers/session';
import { flatSwitch } from 'src/util';

export function SessionTimer() {
  const { session } = useSessionContext();
  const [value, controls] = useTimerHM_MS(0, false);
  useEffect(() => controlTimer(session, controls), [session, controls]);
  return <span>{value}</span>;
}

function controlTimer({ state, startTime, stopTime }: Session, controls: TimerControls) {
  flatSwitch(state, {
    TODO() {
      controls.stop();
      controls.setTime(0);
    },
    ONGOING() {
      controls.start();
      controls.setTime(Date.now() - startTime);
    },
    DONE() {
      controls.stop();
      controls.setTime(stopTime - startTime);
    }
  });
}
