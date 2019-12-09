import { generateId } from 'src/common/id';
import { DB } from 'src/util';
import { Exercice, ExerciceDB } from './exercice';

export type SessionState = 'TODO' | 'ONGOING' | 'DONE';

export class Session {
  id = generateId();
  state: SessionState = 'TODO';
  name = '';
  startTime = 0;
  stopTime = 0;
  exercices: Exercice['id'][] = [];

  constructor() {
    SessionDB.add(this);
  }

  $exercices() {
    return ExerciceDB.getAll(...this.exercices);
  }
  $ongoingExercice() {
    return ExerciceDB.getAll(...this.exercices).find(serie => serie.hasState('ONGOING'));
  }
  $ongoingSerie() {
    const exercice = this.$ongoingExercice();
    return exercice && exercice.$ongoingSerie();
  }
  $nextTodoExercice() {
    return ExerciceDB.getAll(...this.exercices).find(serie => serie.hasState('TODO'));
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

  hasState(...states: SessionState[]) {
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

  next() {
    const exercice = this.$ongoingExercice();
    const todo = this.$nextTodoExercice();
    let done = false;
    if (exercice) {
      done = exercice.next();
      if (done) exercice.stop();
    }
    if (done) {
      if (todo) todo.start();
      else this.stop();
    }
  }
}

export const SessionDB = new DB<Session>(Session);
