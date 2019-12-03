import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { SerieItem } from '../serie/info';
import { useExerciceContext } from './context';

export function SerieList() {
  const exercice = useExerciceContext();
  const exercices = exercice.result.map(serie => <SerieItem serie={serie} exercice={exercice} key={serie.id} />);
  return <ListGroup>{exercices}</ListGroup>;
}
