import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { SessionItem } from 'src/workout/components/session/info';
import { Workout } from 'src/workout/models/workout/wrapper';
import { Exercice } from '../workout/components/exercice/exercice';
import { ExerciceItem } from '../workout/components/exercice/info';
import { SerieItem } from '../workout/components/serie/info';
import { Serie } from '../workout/components/serie/serie';
import { Session } from '../workout/components/session/session';
import './App.scss';

const App: React.FC = () => {
  const session = useSelector(Workout.get.session);
  const exercice = useSelector(Workout.get.exercice.ongoing);
  const serie = useSelector(Workout.get.serie.ongoing);

  return (
    <div>
      <ListGroup>
        <SessionItem {...{ session }} />
        <ExerciceItem {...{ exercice }} />
        <SerieItem {...{ serie }} />
      </ListGroup>
      <div className={'p-2'}>
        <MainDisplay />
      </div>
    </div>
  );
};

function MainDisplay() {
  const exercice = useSelector(Workout.get.exercice.selected);
  const serie = useSelector(Workout.get.serie.selected);

  if (serie) return <Serie serie={serie} />;
  if (exercice) return <Exercice exercice={exercice} />;
  return <Session />;
}

export default App;
