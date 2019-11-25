import { State } from '../../models/state.type';
import exerciceSelectors from './exercice';

function serieIs(...states: Serie.State[]) {
  return (serie: Serie.Type) => states.includes(serie.state);
}

export function getCurrentSerie(state: State) {
  const exercice = exerciceSelectors.current(state);
  return exercice && exercice.result.find(serieIs('ONGOING', 'RESTING'));
}
