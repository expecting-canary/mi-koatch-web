import React, { useEffect } from 'react';
import { useTimerMS } from 'src/common/timer';
import { ISerie } from 'src/workout/types';
import { TimerControls } from 'react-compound-timer';
import { useSerieContext } from './context';
import { flatSwitch } from 'src/util';

export function SerieTimer() {
  const { serie } = useSerieContext();
  const [value, controls] = useTimerMS(0, false);
  useEffect(() => controlTimer(serie, controls), [serie, controls]);
  return <span>{value}</span>;
}

function controlTimer({ state, start, rest, stop }: ISerie, controls: TimerControls) {
  flatSwitch(state, {
    TODO() {
      controls.stop();
      controls.setTime(0);
    },
    ONGOING() {
      controls.start();
      controls.setTime(Date.now() - start.getTime());
    },
    RESTING() {
      controls.start();
      controls.setTime(Date.now() - rest.getTime());
    },
    DONE() {
      controls.stop();
      controls.setTime(stop.getTime() - start.getTime());
    }
  });
}
