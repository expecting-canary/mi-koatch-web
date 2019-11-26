import React from 'react';
import { ExerciceList } from './list';
import { SessionAction } from './actions';
import { useSelector } from 'react-redux';
import { State } from '../../models/state';

export function Session() {
  const state = useSelector((state: State) => state.session.state);
  return (
    <div>
      <SessionAction state={state} />
      <ExerciceList />
    </div>
  );
}
