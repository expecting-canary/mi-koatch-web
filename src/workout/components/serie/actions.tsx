import React from 'react';
import { useDispatch } from 'react-redux';
import { WorkoutDispatch } from '../../redux/store';
import { SerieState } from '../../models';

export function SerieAction({ state }: { state: SerieState }) {
  const dispatch = useDispatch() as WorkoutDispatch;
  switch (state) {
    case 'ONGOING':
      const rest = () => dispatch({ type: 'SERIE_REST' });
      return <button onClick={rest}>Fin Série - Début Repos</button>;
    case 'RESTING':
      const stop = () => dispatch({ type: 'NEXT_SERIE' });
      return <button onClick={stop}>Fin Repos</button>;
  }
  return null;
}
