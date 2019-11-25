import React from 'react';
import { ExerciceState } from '../../models/exercice.type';
import { useDispatch } from 'react-redux';
import { StateDispatch } from '../../redux/store';

export function ExerciceAction({ state }: { state: ExerciceState }) {
  const dispatch = useDispatch() as StateDispatch;
  switch (state) {
    case 'TODO':
      const begin = () => dispatch({ type: 'EXERCICE_START' });
      return <button onClick={begin}>Commencer</button>;
  }
  return null;
}
