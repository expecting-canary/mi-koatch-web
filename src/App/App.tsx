import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { ExerciceContext } from 'src/workout/components/exercice/context';
import { Exercice } from 'src/workout/components/exercice/exercice';
import { ExerciceItem } from 'src/workout/components/exercice/info';
import { SerieItem } from 'src/workout/components/serie/info';
import { Serie } from 'src/workout/components/serie/serie';
import { SessionItem } from 'src/workout/components/session/info';
import { Session } from 'src/workout/components/session/session';
import { UseWorkout } from 'src/workout/state';
import './App.scss';

const App: React.FC = () => {
  return (
    <Provider store={UseWorkout.store}>
      <Status />
      <div className={'p-2'}>
        <MainDisplay />
      </div>
    </Provider>
  );
};

function Status() {
  const session = UseWorkout.selector.session();
  const exercice = UseWorkout.selector.exercice.ongoing();
  const serie = UseWorkout.selector.serie.ongoing();
  return (
    <ListGroup>
      <SessionItem {...{ session }} />
      <ExerciceItem {...{ exercice }} />
      <SerieItem {...{ serie, exercice }} />
    </ListGroup>
  );
}

function MainDisplay() {
  const [, exercice, serie] = UseWorkout.selector.path();

  if (serie && exercice) {
    return (
      <ExerciceContext.Provider value={exercice}>
        <Serie serie={serie} />
      </ExerciceContext.Provider>
    );
  }
  if (exercice) return <Exercice exercice={exercice} />;
  return <Session />;
}

export default App;
