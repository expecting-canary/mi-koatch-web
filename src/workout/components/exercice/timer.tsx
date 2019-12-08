import React, { useEffect } from 'react';
import { TimerControls } from 'react-compound-timer/build';
import { useTimerMS } from 'src/common/timer';
import { useExerciceContext } from '../../providers/exercice';
import { Exercice } from 'src/workout/models';

export function ExerciceTimer() {
  const { exercice } = useExerciceContext();
  const [value, controls] = useTimerMS(0, false);
  useEffect(() => controlTimer(exercice, controls), [exercice, controls]);
  return <span>{value}</span>;
}

function controlTimer({ state, startTime, stopTime }: Exercice, controls: TimerControls) {
  switch (state) {
    case 'TODO':
      controls.stop();
      controls.setTime(0);
      break;
    case 'ONGOING':
      controls.start();
      controls.setTime(Date.now() - startTime);
      break;
    case 'DONE':
      controls.stop();
      controls.setTime(stopTime - startTime);
      break;
  }
}
