import React, { useEffect } from 'react';
import { TimerControls } from 'react-compound-timer/build';
import { useTimerMS } from 'src/common/timer';
import { IExercice } from 'src/workout/types';

export function ExerciceTimer({ state }: { state: IExercice }) {
  const [value, controls] = useTimerMS(0, false);
  useEffect(() => controlTimer(state, controls), [state, controls]);
  return <span>{value}</span>;
}

function controlTimer({ state, start, stop }: IExercice, controls: TimerControls) {
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
