import React from 'react';
import { useDispatch } from 'react-redux';
import { WorkoutDispatch } from '../../redux/store';
import { SerieState } from '../../models';
import { Button } from 'react-bootstrap';

export function SerieAction({ state }: { state: SerieState }) {
  const dispatch = useDispatch() as WorkoutDispatch;
  switch (state) {
    case 'ONGOING':
      const rest = () => dispatch({ type: 'SERIE_REST' });
      return <Button onClick={rest}>Fin Série - Début Repos</Button>;
    case 'RESTING':
      const stop = () => dispatch({ type: 'NEXT' });
      return <Button onClick={stop}>Fin Repos</Button>;
  }
  return null;
}
