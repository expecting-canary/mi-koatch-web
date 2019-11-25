import React from 'react';
import { useDispatch } from 'react-redux';
import { SessionState } from '../../redux/managers/session';
import { StateDispatch } from '../../redux/store';

export function SessionAction({ state }: { state: SessionState }) {
  const dispatch = useDispatch() as StateDispatch;
  switch (state) {
    case 'TODO':
      const begin = () => dispatch({ type: 'SESSION_START' });
      return <button onClick={begin}>Commencer Session</button>;
    case 'ONGOING':
      const stop = () => dispatch({ type: 'SESSION_STOP' });
      return <button onClick={stop}>Finir Session</button>;
  }
  return null;
}
