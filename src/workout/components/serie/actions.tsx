import React from 'react';
import { useDispatch } from 'react-redux';
import { StateDispatch } from '../../redux/store';

export function SerieAction({ state }: { state: Serie.State }) {
  const dispatch = useDispatch() as StateDispatch;
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
