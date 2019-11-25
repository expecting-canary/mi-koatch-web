import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import { State } from '../workout/models/state.type';
import { getOngoingExercice } from '../workout/redux/reducers/session';
import { Serie } from '../workout/components/serie/serie';
import { Exercice } from '../workout/components/exercice/exercice';
import { Session } from '../workout/components/session/session';
import { getCurrentSerie } from '../workout/redux/selectors/selectors';

const App: React.FC = () => {
  const state = useSelector((state: State) => state);
  const exercice = getOngoingExercice(state.session);
  if (exercice) {
    const serie = getCurrentSerie(state);
    if (serie) return <Serie serie={serie} />;
    else return <Exercice exercice={exercice} />;
  } else return <Session />;
};

export default App;
