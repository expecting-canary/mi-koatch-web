import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Exercice } from 'src/workout/components/exercice/exercice';
import { ExerciceItem } from 'src/workout/components/exercice/info';
import { SerieItem } from 'src/workout/components/serie/info';
import { Serie } from 'src/workout/components/serie/serie';
import { SessionItem } from 'src/workout/components/session/info';
import { Session } from 'src/workout/components/session/session';
import { UseWorkout } from 'src/workout/state';
import './App.scss';

const App: React.FC = () => {
  const session = UseWorkout.selector.session();
  const exercice = UseWorkout.selector.exercice.ongoing();
  const serie = UseWorkout.selector.serie.ongoing();

  return (
    <div>
      <ListGroup>
        <SessionItem {...{ session }} />
        <ExerciceItem {...{ exercice }} />
        <SerieItem {...{ serie, exercice }} />
      </ListGroup>
      <div className={'p-2'}>
        <MainDisplay />
      </div>
    </div>
  );
};

function MainDisplay() {
  const exercice = UseWorkout.selector.exercice.selected();
  const serie = UseWorkout.selector.serie.selected();

  if (serie) return <Serie serie={serie} />;
  if (exercice) return <Exercice exercice={exercice} />;
  return <Session />;
}

export default App;
