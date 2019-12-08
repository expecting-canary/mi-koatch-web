import { immerable } from 'immer';
import { generateId } from 'src/common/id';
import { DB } from 'src/util';
import { Exercice } from './exercice';

export type SerieState = 'TODO' | 'ONGOING' | 'RESTING' | 'DONE';

export type SerieEditable = 'weight' | 'repetitions';

export type SerieUpdater = Partial<Pick<Serie, SerieEditable>> & { id: string };

export class Serie {
  [immerable] = true;

  id = generateId();
  state: SerieState = 'TODO';
  startTime = 0;
  restTime = 0;
  stopTime = 0;
  weight = 10;
  repetitions = 10;

  constructor(exercice?: Exercice) {
    if (exercice) {
      this.weight = exercice.weight;
      this.repetitions = exercice.repetitions;
    }
    SerieDB.add(this);
  }

  workoutDuration() {
    return this.restTime - this.startTime;
  }
  restDuration() {
    return this.stopTime - this.restTime;
  }
  totalDuration() {
    return this.stopTime - this.startTime;
  }

  startDate() {
    return new Date(this.startTime);
  }
  restDate() {
    return new Date(this.restTime);
  }
  stopDate() {
    return new Date(this.stopTime);
  }

  hasState(...states: SerieState[]) {
    return states.includes(this.state);
  }

  start() {
    this.state = 'ONGOING';
    this.startTime = Date.now();
  }
  rest() {
    this.state = 'RESTING';
    this.restTime = Date.now();
  }
  stop() {
    this.state = 'DONE';
    this.stopTime = Date.now();
  }

  update(updater: SerieUpdater) {
    if (this.id === updater.id) Object.assign(this, updater);
  }
}

export const SerieDB = new DB<Serie>(Serie);
