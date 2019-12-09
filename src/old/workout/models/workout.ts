import { immerable } from 'immer';
import { Exercice, ExerciceDB } from './exercice';
import { Exercice, SerieDB } from '../../../models/serie';
import { Session, SessionDB } from './session';

type WorkoutSelectedNone = {
  type: 'NONE';
};
type WorkoutSelectedSession = {
  type: 'SESSION';
  session: Session['id'];
};
type WorkoutSelectedExercice = {
  type: 'EXERCICE';
  session: Session['id'];
  exercice: Exercice['id'];
};
type WorkoutSelectedSerie = {
  type: 'SERIE';
  session: Session['id'];
  exercice: Exercice['id'];
  serie: Exercice['id'];
};

type WorkoutSelected = WorkoutSelectedNone | WorkoutSelectedSession | WorkoutSelectedExercice | WorkoutSelectedSerie;

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
  serie?: Exercice['id'];

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

  $selected(): WorkoutSelected {
    return {
      type: this.type,
      session: this.session,
      exercice: this.exercice,
      serie: this.serie
    } as any;
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
