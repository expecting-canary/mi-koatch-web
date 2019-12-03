import React from 'react';
import { Button } from 'react-bootstrap';
import { UseWorkout } from 'src/workout/state';
import { useSessionContext } from './context';

export function SessionAction() {
  const session = useSessionContext();
  const start = UseWorkout.dispatch.start();
  switch (session.state) {
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
