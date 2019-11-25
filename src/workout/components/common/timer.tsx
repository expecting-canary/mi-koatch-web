import React from 'react';
import { useState } from 'react';
import { useInterval } from '../../hooks/useInterval';

const SECONDE = 1000;
const MINUTE = SECONDE * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export function Timer({ start = new Date(), running = true }: { start?: Date; running?: boolean }) {
  const [timer, setTimer] = useState(0);

  useInterval(() => setTimer(Date.now() - start.getTime()), running ? 10 : null);

  let time = timer;
  const days = Math.floor(time / DAY);
  time -= days * DAY;
  const hours = Math.floor(time / HOUR);
  time -= hours * HOUR;
  const minutes = Math.floor(time / MINUTE);
  time -= minutes * MINUTE;
  let secondes = Math.floor(time / SECONDE);
  time -= secondes * SECONDE;
  const secondesText = secondes < 10 ? '0' + secondes : secondes;

  if (days) {
    return (
      <div>
        {days}:{hours}:{minutes}:{secondesText}
      </div>
    );
  } else if (hours) {
    return (
      <div>
        {hours}:{minutes}:{secondesText}
      </div>
    );
  } else if (minutes) {
    return (
      <div>
        {minutes}:{secondesText}
      </div>
    );
  } else {
    const hundredths = Math.floor(time / 10);
    const hundredthsText = hundredths < 10 ? '0' + hundredths : hundredths;
    return (
      <div>
        {secondesText}:{hundredthsText}
      </div>
    );
  }
}
