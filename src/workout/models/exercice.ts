import { Serie, SerieDB } from './serie';
import { generateId } from 'src/common/id';
import { DB } from 'src/util';

export type ExerciceState = 'TODO' | 'ONGOING' | 'DONE';

export enum ExerciceType {
  None
}

export type ExerciceEditable = 'weight' | 'repetitions' | 'rest' | 'series';

export type ExerciceUpdater = Partial<Pick<Exercice, ExerciceEditable>> & { id: string };

export class Exercice {
  id = generateId();
  state: ExerciceState = 'TODO';
  type = ExerciceType.None;
  name = '';
  startTime = 0;
  stopTime = 0;
  rest = 90;
  weight = 10;
  series = 4;
  repetitions = 10;
  result: Serie['id'][] = [];

  constructor() {
    ExerciceDB.add(this);
  }

  $result() {
    return SerieDB.getAll(...this.result);
  }
  $ongoingSerie() {
    return SerieDB.getAll(...this.result).find(serie => serie.hasState('ONGOING', 'RESTING'));
  }

  duration() {
    return this.stopTime - this.startTime;
  }

  startDate() {
    return new Date(this.startTime);
  }
  stopDate() {
    return new Date(this.stopTime);
  }

  hasState(...states: ExerciceState[]) {
    return states.includes(this.state);
  }

  start() {
    this.state = 'ONGOING';
    this.startTime = Date.now();
    this.next();
  }
  stop() {
    this.state = 'DONE';
    this.stopTime = Date.now();
  }

  addSerie(serie: Serie) {
    this.result.push(serie.id);
  }

  update(updater: ExerciceUpdater) {
    Object.assign(this, updater);
  }
  next() {
    const serie = this.$ongoingSerie();
    if (serie) serie.stop();
    const done = this.result.length === this.series;
    if (!done) return this.nextTodo();
    this.stop();
    return true;
  }

  private nextTodo() {
    const todo = new Serie(this);
    todo.start();
    this.addSerie(todo);
    return false;
  }
}

export const ExerciceDB = new DB<Exercice>(Exercice);
