import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import FlexView from 'react-flexview';
import { Icon } from 'src/common/icon/icon';
import { ISession } from 'src/workout/types';
import { UseWorkout } from 'src/workout/state';
import { SessionTimer } from './timer';
import { useSessionContext, SessionContext } from './context';

function useSelect(id: string) {
  const dispatch = UseWorkout.dispatch.select.session();
  return () => dispatch(id);
}

function SessionInfo() {
  const session = useSessionContext();
  const onClick = useSelect(session.id);
  return (
    <ListGroupItem>
      <FlexView wrap onClick={onClick}>
        <FlexView grow>Session</FlexView>
        <Details />
      </FlexView>
    </ListGroupItem>
  );
}

/// DETAILS

function Details() {
  return (
    <FlexView hAlignContent="right">
      <TimerDetail />
      <ExercicesDetail />
    </FlexView>
  );
}

function TimerDetail() {
  return (
    <FlexView width={70} hAlignContent="right" vAlignContent="center">
      <SessionTimer />
      &nbsp;
      <Icon icon={'clock'} far />
    </FlexView>
  );
}

function ExercicesDetail() {
  const session = useSessionContext();
  return (
    <FlexView width={50} hAlignContent="right" vAlignContent="center">
      {session.exercices.length}
      &nbsp;
      <Icon icon={'redo'} />
    </FlexView>
  );
}

///

export function SessionItem({ session }: { session?: ISession }) {
  return session ? (
    <SessionContext.Provider value={session}>
      <SessionInfo />
    </SessionContext.Provider>
  ) : null;
}
