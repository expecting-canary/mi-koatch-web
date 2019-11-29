import React from 'react';
import { useState } from 'react';
import { useInterval } from '../../../common/useInterval';

const SECONDE = 1000;
const MINUTE = SECONDE * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export function Timer({ start = new Date(), running = true }: { start?: Date; running?: boolean }) {
  const [timer, setTimer] = useState(0);

  useInterval(() => setTimer(Date.now() - start.getTime()), running ? 10 : null);

  return <span>{getTimer(timer)}</span>;
}

function getTimer(timer: number) {
  const days = Math.floor(timer / DAY);
  timer -= days * DAY;
  const hours = Math.floor(timer / HOUR);
  timer -= hours * HOUR;
  const minutes = Math.floor(timer / MINUTE);
  timer -= minutes * MINUTE;
  const secondes = Math.floor(timer / SECONDE);
  timer -= secondes * SECONDE;
  const hundredths = Math.floor(timer / 10);

  return getText(days, hours, minutes, secondes, hundredths);
}

function getText(days: number, hours: number, minutes: number, secondes: number, hundredths: number) {
  const minutesText = appendZeros(minutes, hours || days);
  const secondesText = appendZeros(secondes);
  const hundredthsText = appendZeros(hundredths);

  if (days) return `${days}:${hours}:${minutesText}:${secondesText}`;
  if (hours) return `${hours}:${minutesText}:${secondesText}`;
  if (minutes) return `${minutesText}:${secondesText}`;
  return `${secondesText}:${hundredthsText}`;
}

function appendZeros(value: number, condition: any = true) {
  return condition && value < 10 ? '0' + value : value;
}
