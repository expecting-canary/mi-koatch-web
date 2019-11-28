import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Timer } from '../workout/components/common/timer';
import { Exercice } from '../workout/components/exercice/exercice';
import { ExerciceItem } from '../workout/components/exercice/info';
import { SerieItem } from '../workout/components/serie/info';
import { Serie } from '../workout/components/serie/serie';
import { Session } from '../workout/components/session/session';
import { State } from '../workout/redux/state';
import { WorkoutManager } from '../workout/redux/store';
import './App.scss';

const App: React.FC = () => {
  const exercice = useSelector(WorkoutManager.get.exercice.ongoing);
  const serie = useSelector(WorkoutManager.get.serie.ongoing);

  return (
    <div>
      <WorkoutTimer />
      <ListGroup>
        <ExerciceItem {...{ exercice }} onClick={console.log} />
        <SerieItem {...{ serie }} />
      </ListGroup>
      <MainDisplay />
    </div>
  );
};

function MainDisplay() {
  const state = useSelector((state: State) => state);

  const exercice = WorkoutManager.get.exercice.ongoing(state);
  const serie = WorkoutManager.get.serie.ongoing(state);

  if (serie) return <Serie serie={serie} />;
  if (exercice) return <Exercice exercice={exercice} />;
  return <Session />;
}

export default App;

function WorkoutTimer() {
  const state = useSelector((state: State) => state);
  const session = state.session.state === 'ONGOING' && state.session;
  const exercice = WorkoutManager.get.exercice.ongoing(state);
  const serie = WorkoutManager.get.serie.ongoing(state);

  return (
    <div>
      {session && <Timer start={state.session.start} />}
      {exercice && <Timer start={exercice.start} />}
      {serie && <Timer start={serie.start} />}
    </div>
  );
}
