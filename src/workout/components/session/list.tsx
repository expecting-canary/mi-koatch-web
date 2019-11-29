import React from 'react';
import { useSelector } from 'react-redux';
import { ExerciceItem } from '../exercice/info';
import { ListGroup } from 'react-bootstrap';
import { useWorkoutSelector } from 'src/workout/redux/store';

export function ExerciceList() {
  const state = useWorkoutSelector();
  const exercices = state.session.exercices.map(exercice => <ExerciceItem exercice={exercice} key={exercice.id} />);
  return <ListGroup>{exercices}</ListGroup>;
}
