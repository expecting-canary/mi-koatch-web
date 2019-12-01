import React from 'react';
import FlexView from 'react-flexview/lib';
import { UseWorkout } from 'src/workout/state';
import { SessionAction } from './actions';
import { ExerciceList } from './list';

export function Session() {
  const session = UseWorkout.selector.session();
  return (
    <FlexView column>
      <SessionAction state={session.state} />
      <ExerciceList />
    </FlexView>
  );
}
