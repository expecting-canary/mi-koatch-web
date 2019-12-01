import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import FlexView from 'react-flexview';
import { Icon } from 'src/common/icon/icon';
import { ISession } from 'src/workout/types';
import { UseWorkout } from 'src/workout/state';
import { SessionTimer } from './timer';

function useSelect(id: string) {
  const dispatch = UseWorkout.dispatch.select.session();
  return () => dispatch(id);
}

function SessionInfo({ session }: { session: ISession }) {
  const onClick = useSelect(session.id);
  return (
    <ListGroupItem>
      <FlexView wrap onClick={onClick}>
        <FlexView grow>Session</FlexView>
        <Details session={session}/>
      </FlexView>
    </ListGroupItem>
  );
}

/// DETAILS

const Details = ({ session }: { session: ISession }) => (
  <FlexView hAlignContent="right">
    <TimerDetail session={session} />
    {ExercicesDetail(session)}
  </FlexView>
);

const TimerDetail = ({ session }: { session: ISession }) => (
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
  return session ? <SessionInfo session={session}/> : null;
}
