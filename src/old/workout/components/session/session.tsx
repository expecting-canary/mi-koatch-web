import React from 'react';
import FlexView from 'react-flexview/lib';
import { SessionAction } from './actions';
import { SessionContextProvider } from '../../providers/session';
import { ExerciceList } from './list';

export function Session() {
  return (
    <SessionContextProvider>
      <FlexView column>
        <SessionAction />
        <ExerciceList />
      </FlexView>
    </SessionContextProvider>
  );
}
