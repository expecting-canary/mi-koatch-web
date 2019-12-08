import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { ExerciceItem } from '../exercice/info';
import { useSessionContext } from '../../providers/session';

export function ExerciceList() {
  const { session } = useSessionContext();
  const exercices = session
    .$exercices()
    .map(exercice => <ExerciceItem exercice={exercice} key={exercice.id} />);
  return <ListGroup>{exercices}</ListGroup>;
}
