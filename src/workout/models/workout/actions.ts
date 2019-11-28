import { IWorkout } from './type';
import { Session, Selected } from 'src/workout/models';

export const action = {
  start({ session, selected }: IWorkout) {
    Session.action.start(session);
    const serie = Session.get.serie.ongoing(session);
    if (serie) Selected.action.select.serie(selected, serie.id);
  },
  next({ session, selected }: IWorkout) {
    Session.action.serie.next(session);
    const serie = Session.get.serie.ongoing(session);
    if (serie) Selected.action.select.serie(selected, serie.id);
    else Selected.action.select.session(selected, session.id);
  }
};
