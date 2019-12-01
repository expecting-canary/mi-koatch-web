import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { UseWorkout } from 'src/workout/state';
import { ExerciceItem } from '../exercice/info';

export function ExerciceList() {
  const session = UseWorkout.selector.session();
  const exercices = session.exercices.map(exercice => <ExerciceItem exercice={exercice} key={exercice.id} />);
  return <ListGroup>{exercices}</ListGroup>;
}
