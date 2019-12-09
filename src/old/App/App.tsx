import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { Exercice } from 'src/workout/components/exercice/exercice';
import { ExerciceItem } from 'src/workout/components/exercice/info';
import { SerieItem } from 'src/workout/components/serie/info';
import { Serie } from 'src/workout/components/serie/serie';
import { SessionItem } from 'src/workout/components/session/info';
import { Session } from 'src/workout/components/session/session';
import { ExerciceContextProvider } from 'src/workout/providers/exercice';
import { useWorkoutContext, WorkoutContextProvider } from 'src/workout/providers/workout';
import { store } from 'src/workout/state';
import './App.scss';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <WorkoutContextProvider>
        <Status />
        <div className={'p-2'}>
          <MainDisplay />
        </div>
      </WorkoutContextProvider>
    </Provider>
  );
};

function Status() {
  const {
    selected: { session },
    ongoing: { serie, exercice }
  } = useWorkoutContext();
  return (
    <ListGroup>
      <SessionItem {...{ session }} />
      <ExerciceItem {...{ exercice }} />
      <SerieItem {...{ serie, exercice }} />
    </ListGroup>
  );
}

function MainDisplay() {
  const { session, serie, exercice } = useWorkoutContext().selected;
  if (session) {
  }
  if (serie && exercice) {
    return (
      <ExerciceContextProvider exercice={exercice}>
        <Serie serie={serie} />
      </ExerciceContextProvider>
    );
  }
  if (exercice) return <Exercice exercice={exercice} />;
  return <Session />;
}

export default App;
