/// IMPORTS

import { Serie, ISerie } from './serie';
import { generateId } from '../../common/id';

///

/// TYPES

type State = 'TODO' | 'ONGOING' | 'DONE';

enum ExerciceType {
  None
}

interface Exercice {
  id: string;
  state: State;
  type: ExerciceType;
  name: string;
  start: Date;
  stop: Date;
  rest: number;
  weight: number;
  series: number;
  repetitions: number;
  result: ISerie[];
}

type Editable = 'weight' | 'repetitions' | 'rest' | 'series';

type Updater = Partial<Pick<Exercice, Editable>> & { id: string };

///

/// INIT

function init(): Exercice {
  return {
    id: generateId(),
    state: 'TODO',
    type: ExerciceType.None,
    name: 'Empty',
    start: new Date(),
    stop: new Date(),
    rest: 90,
    weight: 0,
    series: 4,
    repetitions: 10,
    result: []
  };
}

///

/// ACTIONS

function start(exercice: Exercice) {
  exercice.state = 'ONGOING';
  exercice.start = new Date();
  nextSerie(exercice);
}

function stop(exercice: Exercice) {
  exercice.state = 'DONE';
  exercice.stop = new Date();
}
function nextSerie(exercice: Exercice) {
  const serie = get.serie.ongoing(exercice);
  const done = exercice.result.length === exercice.series;

  if (serie) Serie.action.stop(serie);
  if (!done) exerciceAddSerie(exercice);
  else stop(exercice);
}

function exerciceAddSerie(exercice: Exercice) {
  const todo = Serie.init(exercice);
  Serie.action.start(todo);
  exercice.result.push(todo);
}

function update(exercice: Exercice, updater: Updater) {
  Object.assign(exercice, updater);
}

const action = {
  start,
  stop,
  update,
  nextSerie
};

///

/// GETTERS

const get = {
  serie: {
    ongoing(exercice: Exercice) {
      return exercice.result.find(Serie.util.isStateBuilder('ONGOING', 'RESTING'));
    },

    byId(exercice: Exercice, id: string) {
      return exercice.result.find(serie => serie.id === id);
    }
  }
};

///

/// WRAPPER

const Exercice = {
  init,
  action,
  get
};

///

/// EXPORTS

export { Exercice };
export type IExercice = Exercice;
export type ExerciceState = State;
export type ExerciceEditable = Editable;
export type ExerciceUpdater = Updater;

///
