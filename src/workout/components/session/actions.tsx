import React from 'react';
import { Button } from 'react-bootstrap';
import { useLangage } from 'src/common/langage/context';
import { useSessionContext } from './context';

export function SessionAction() {
  const text = useLangage();
  const { session, start } = useSessionContext();
  switch (session.state) {
    case 'TODO':
      return <Button onClick={start}>{text.session.start}</Button>;
    case 'ONGOING': /*
      const stop = () => dispatch({ type: 'SESSION_STOP' });
      return <button onClick={stop}>Finir Session</button>;
      */
  }
  return null;
}
