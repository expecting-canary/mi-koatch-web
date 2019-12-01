import React from 'react';
import { Button } from 'react-bootstrap';
import { UseWorkout } from 'src/workout/state';
import { SessionState } from 'src/workout/types';

export function SessionAction({ state }: { state: SessionState }) {
  const start = UseWorkout.dispatch.start();
  switch (state) {
    case 'TODO':
      const begin = () => start();
      return <Button onClick={begin}>Commencer Session</Button>;
    case 'ONGOING': /*
      const stop = () => dispatch({ type: 'SESSION_STOP' });
      return <button onClick={stop}>Finir Session</button>;
      */
  }
  return null;
}
