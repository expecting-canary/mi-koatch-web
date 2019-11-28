import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../redux/state';
import { ExerciceItem } from '../exercice/info';
import { ListGroup } from 'react-bootstrap';

export function ExerciceList() {
  const session = useSelector((state: State) => state.session);
  const exercices = session.exercices.map(exercice => <ExerciceItem exercice={exercice} key={exercice.id} />);
  return <ListGroup>{exercices}</ListGroup>;
}
