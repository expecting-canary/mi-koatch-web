import React from 'react';
import FlexView from 'react-flexview';
import { Icon } from '../../../common/icon/icon';
import { ListGroupItem } from 'react-bootstrap';
import { ISession } from 'src/workout/models';
import { SessionTimer } from './timer';
import { WorkoutDispatch } from 'src/workout/redux/store';
import { useDispatch } from 'react-redux';

function useSelect(id: string) {
  const dispatch = useDispatch() as WorkoutDispatch;
  return () => dispatch({ type: 'SELECT_SESSION', payload: id });
}

function SessionInfo(session: ISession) {
  const onClick = useSelect(session.id);
  return (
    <ListGroupItem>
      <FlexView wrap onClick={onClick}>
        <FlexView grow>Session</FlexView>
        {Details(session)}
      </FlexView>
    </ListGroupItem>
  );
}

/// DETAILS

const Details = (session: ISession) => (
  <FlexView hAlignContent="right">
    {TimerDetail(session)}
    {ExercicesDetail(session)}
  </FlexView>
);

const TimerDetail = (session: ISession) => (
  <FlexView width={70} hAlignContent="right" vAlignContent="center">
    <SessionTimer state={session} />
    &nbsp;
    <Icon icon={'clock'} far />
  </FlexView>
);

const ExercicesDetail = (session: ISession) => (
  <FlexView width={50} hAlignContent="right" vAlignContent="center">
    {session.exercices.length}
    &nbsp;
    <Icon icon={'redo'} />
  </FlexView>
);

///

export function SessionItem({ session }: { session?: ISession }) {
  return session ? SessionInfo(session) : null;
}
