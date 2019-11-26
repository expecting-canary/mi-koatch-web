/// IMPORTS

import { IExercice } from './exercice';
import { generateId } from '../../common/id';

///

/// TYPES

type State = 'TODO' | 'ONGOING' | 'RESTING' | 'DONE';

interface Serie {
  id: string;
  state: State;
  start: Date;
  rest: Date;
  stop: Date;
  weight: number;
  repetitions: number;
}

type Editable = 'weight' | 'repetitions';

type Updater = Partial<Pick<Serie, Editable>> & { id: string };

///

/// INIT
function init(exercice?: IExercice): Serie {
  return {
    id: generateId(),
    state: 'TODO',
    start: new Date(),
    rest: new Date(),
    stop: new Date(),
    weight: exercice ? exercice.weight : 0,
    repetitions: exercice ? exercice.repetitions : 10
  };
}
///

/// ACTIONS

function start(serie: Serie) {
  serie.state = 'ONGOING';
  serie.start = new Date();
}

function rest(serie: Serie) {
  serie.state = 'RESTING';
  serie.rest = new Date();
}

function stop(serie: Serie) {
  serie.state = 'DONE';
  serie.stop = new Date();
}

function update(serie: Serie, updater: Updater) {
  Object.assign(serie, updater);
}

const action = {
  start,
  rest,
  stop,
  update
};

///

/// UTILS
function isStateBuilder(...states: State[]) {
  return (serie: Serie) => states.includes(serie.state);
}

const util = { isStateBuilder };
///

/// WRAPPER
const Serie = {
  init,
  action,
  util
};
///

/// EXPORTS

export { Serie };
export type ISerie = Serie;
export type SerieState = State;
export type SerieEditable = Editable;
export type SerieUpdater = Updater;
///
