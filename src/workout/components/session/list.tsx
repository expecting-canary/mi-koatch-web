import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../models/state.type';

export function ExerciceList() {
  const session = useSelector((state: State) => state.session);
  const exercices = session.exercices.map(({ name }, index) => {
    return <div key={index}>{name}</div>;
  });
  return <div>{exercices}</div>;
}
