import React from 'react';
import { useSelector } from 'react-redux';
import { Exercice } from '../workout/components/exercice/exercice';
import { Serie } from '../workout/components/serie/serie';
import { Session } from '../workout/components/session/session';
import { State } from '../workout/models/state';
import { Workout } from '../workout/redux/workout';
import './App.scss';
import { Timer } from '../workout/components/common/timer';

const App: React.FC = () => {
  return (
    <div>
      <WorkoutTimer />
      <MainDisplay />
    </div>
  );
};

function MainDisplay() {
  const state = useSelector((state: State) => state);

  const exercice = Workout.get.exercice.ongoing(state);
  const serie = Workout.get.serie.ongoing(state);

  if (serie) return <Serie serie={serie} />;
  if (exercice) return <Exercice exercice={exercice} />;
  return <Session />;
}

export default App;

function WorkoutTimer() {
  const state = useSelector((state: State) => state);
  const session = state.session.state === 'ONGOING' && state.session;
  const exercice = Workout.get.exercice.ongoing(state);
  const serie = Workout.get.serie.ongoing(state);

  return (
    <div>
      {session && <Timer start={state.session.start} />}
      {exercice && <Timer start={exercice.start} />}
      {serie && <Timer start={serie.start} />}
    </div>
  );
}
