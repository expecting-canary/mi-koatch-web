import React, { useEffect } from 'react';
import { useTimerMS } from 'src/common/timer';
import { Serie } from 'src/workout/models';
import { TimerControls } from 'react-compound-timer';
import { useSerieContext } from '../../providers/serie';
import { flatSwitch } from 'src/util';

export function SerieTimer() {
  const { serie } = useSerieContext();
  const [value, controls] = useTimerMS(0, false);
  useEffect(() => controlTimer(serie, controls), [serie, controls]);
  return <span>{value}</span>;
}

function controlTimer({ state, startTime, restTime, stopTime }: Serie, controls: TimerControls) {
  flatSwitch(state, {
    TODO() {
      controls.stop();
      controls.setTime(0);
    },
    ONGOING() {
      controls.start();
      controls.setTime(Date.now() - startTime);
    },
    RESTING() {
      controls.start();
      controls.setTime(Date.now() - restTime);
    },
    DONE() {
      controls.stop();
      controls.setTime(stopTime - startTime);
    }
  });
}
