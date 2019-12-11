import React from 'react';
import { TimerControls, useTimer } from 'react-compound-timer';

type TimerTuple = [ string, TimerControls ];

function format( value: number ) {
  return value < 10 ? `0${ value }` : `${ value }`;
}

export function TimerMS( { time = 0, running = true }: { time?: number; running?: boolean } ) {
  const { value } = useTimer( { initialTime: time, startImmediately: running } );
  return <span>{`${ value.m }:${ format( value.s ) }`}</span>;
}

export function useTimerMS( time = 0, running = true ): TimerTuple {
  const { value, controls } = useTimer( { initialTime: time, startImmediately: running } );
  return [ `${ value.m }:${ format( value.s ) }`, controls ];
}

export function useTimerHM_MS( time = 0, running = true ): TimerTuple {
  const { value, controls } = useTimer( { initialTime: time, startImmediately: running } );
  const timer = value.h ? `${ value.h }:${ format( value.m ) }` : `${ value.m }:${ format( value.s ) }`;
  return [ timer, controls ];
}
