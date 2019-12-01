import { ISession, ISelected, IRestTrigger } from 'src/workout/types';

export interface IWorkout {
  session: ISession;
  selected: ISelected;
  restTrigger: IRestTrigger;
}
