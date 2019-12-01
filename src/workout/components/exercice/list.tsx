import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { IExercice } from 'src/workout/types';
import { SerieItem } from '../serie/info';

export function SerieList(exercice: IExercice) {
  const exercices = exercice.result.map(serie => <SerieItem serie={serie} key={serie.id} />);
  return <ListGroup>{exercices}</ListGroup>;
}
