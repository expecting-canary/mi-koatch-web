import React from 'react';
import FlexView from 'react-flexview/lib';
import { UseWorkout } from 'src/workout/state';
import { SessionAction } from './actions';
import { SessionContextProvider } from './context';
import { ExerciceList } from './list';

export function Session() {
  const session = UseWorkout.selector.session();
  return (
    <SessionContextProvider session={session}>
      <FlexView column>
        <SessionAction />
        <ExerciceList />
      </FlexView>
    </SessionContextProvider>
  );
}
