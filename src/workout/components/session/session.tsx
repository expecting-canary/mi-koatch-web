import React from 'react';
import FlexView from 'react-flexview/lib';
import { UseWorkout } from 'src/workout/state';
import { SessionAction } from './actions';
import { ExerciceList } from './list';
import { SessionContext } from './context';

export function Session() {
  const session = UseWorkout.selector.session();
  return (
    <SessionContext.Provider value={session}>
      <FlexView column>
        <SessionAction />
        <ExerciceList />
      </FlexView>
    </SessionContext.Provider>
  );
}
