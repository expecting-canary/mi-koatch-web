import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import FlexView from 'react-flexview';
import { Icon } from 'src/common/icon/icon';
import { Session } from 'src/workout/models';
import { SessionContextProvider, useSessionContext } from '../../providers/session';
import { SessionTimer } from './timer';

function SessionInfo() {
  const { select } = useSessionContext();
  return (
    <ListGroupItem>
      <FlexView wrap onClick={select}>
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
  const { session } = useSessionContext();
  return (
    <FlexView width={50} hAlignContent="right" vAlignContent="center">
      {session.exercices.length}
      &nbsp;
      <Icon icon={'redo'} />
    </FlexView>
  );
}

///

export function SessionItem({ session }: { session?: Session }) {
  return session ? (
    <SessionContextProvider>
      <SessionInfo />
    </SessionContextProvider>
  ) : null;
}
