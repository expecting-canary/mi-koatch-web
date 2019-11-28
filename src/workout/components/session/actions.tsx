import React from 'react';
import { useDispatch } from 'react-redux';
import { WorkoutDispatch } from '../../redux/store';
import { SessionState } from '../../models';
import { Button } from 'react-bootstrap';

export function SessionAction({ state }: { state: SessionState }) {
  const dispatch = useDispatch() as WorkoutDispatch;
  switch (state) {
    case 'TODO':
      const begin = () => dispatch({ type: 'START' });
      return <Button onClick={begin}>Commencer Session</Button>;
    case 'ONGOING': /*
      const stop = () => dispatch({ type: 'SESSION_STOP' });
      return <button onClick={stop}>Finir Session</button>;
      */
  }
  return null;
}
