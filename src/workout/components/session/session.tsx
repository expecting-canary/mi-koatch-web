import React from 'react';
import { ExerciceList } from './list';
import { SessionAction } from './actions';
import { useSelector } from 'react-redux';
import { State } from '../../redux/state';
import FlexView from 'react-flexview/lib';

export function Session() {
  const state = useSelector((state: State) => state.session.state);
  return (
    <FlexView column>
      <SessionAction state={state} />
      <ExerciceList />
    </FlexView>
  );
}
