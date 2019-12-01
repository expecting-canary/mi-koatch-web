import { IWorkout } from 'src/workout/types';
import { MSession, MSelected } from 'src/workout/models';

export const operation = {
  start({ session, selected }: IWorkout) {
    MSession.do.start(session);
    const serie = MSession.get.serie.ongoing(session);
    if (serie) MSelected.do.select.serie(selected, serie.id);
  },
  next({ session, selected }: IWorkout) {
    MSession.do.serie.next(session);
    const serie = MSession.get.serie.ongoing(session);
    if (serie) MSelected.do.select.serie(selected, serie.id);
    else MSelected.do.select.session(selected, session.id);
  }
};
