import { immerable } from 'immer';
import { Session, SessionDB } from './session';
import { Serie, SerieDB } from './serie';
import { Exercice, ExerciceDB } from './exercice';

type WorkoutSelectedSession = {
  type: 'SESSION';
  id: Session['id'];
};
type WorkoutSelectedExercice = {
  type: 'EXERCICE';
  id: Serie['id'];
};
type WorkoutSelectedSerie = {
  type: 'SERIE';
  id: Serie['id'];
};

type WorkoutSelected = WorkoutSelectedSession | WorkoutSelectedExercice | WorkoutSelectedSerie;

export type SelectedType = 'NONE' | 'SESSION' | 'EXERCICE' | 'SERIE';

export type WorkoutRestTrigger = {
  id?: NodeJS.Timeout;
  delay: number;
  startTime: number;
};

export class Workout {
  [immerable] = true;

  type: SelectedType = 'NONE';
  session?: Session['id'];
  exercice?: Exercice['id'];
  serie?: Serie['id'];

  trigger: WorkoutRestTrigger = {
    delay: 0,
    startTime: 0
  };

  $session() {
    return SessionDB.getOpt(this.session);
  }
  $exercice() {
    return ExerciceDB.getOpt(this.exercice);
  }
  $serie() {
    return SerieDB.getOpt(this.serie);
  }

  $ongoingExercice() {
    const session = this.$session();
    return session && session.$ongoingExercice();
  }
  $ongoingSerie() {
    const exercice = this.$ongoingExercice();
    return exercice && exercice.$ongoingSerie();
  }

  start() {
    SessionDB.get(this.session).start();
    this.autoSelect();
  }

  next() {
    SessionDB.get(this.session).next();
    this.autoSelect();
  }

  rest() {
    const serie = this.$ongoingSerie();
    if (serie) serie.rest();
  }

  private autoSelect() {
    const exercice = this.$ongoingExercice();
    if (exercice) {
      this.exercice = exercice.id;
      this.type = 'EXERCICE';
      const serie = this.$ongoingSerie();
      if (serie) {
        this.serie = serie.id;
        this.type = 'SERIE';
      }
    }
  }

  selectSession(id: string) {
    this.session = id;
    this.type = 'SESSION';
  }

  selectExercice(id: string) {
    this.exercice = id;
    this.type = 'EXERCICE';
  }

  selectSerie(id: string) {
    this.serie = id;
    this.type = 'SERIE';
  }
}
