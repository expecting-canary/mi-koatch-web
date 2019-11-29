import { IWorkout } from './type';
import { Session, Selected } from 'src/workout/models';

export const action = {
  start({ session, selected }: IWorkout) {
    Session.operation.start(session);
    const serie = Session.selector.serie.ongoing(session);
    if (serie) Selected.operation.select.serie(selected, serie.id);
  },
  next({ session, selected }: IWorkout) {
    Session.operation.serie.next(session);
    const serie = Session.selector.serie.ongoing(session);
    if (serie) Selected.operation.select.serie(selected, serie.id);
    else Selected.operation.select.session(selected, session.id);
  }
};
