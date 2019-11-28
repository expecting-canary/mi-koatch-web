import { IWorkout } from 'src/workout/models/workout/type';
import { SharedActions } from './actions';
import { handlers } from './handlers';
import { reducerBuilder } from 'src/common/reducer.builder';

export const sharedReducer = reducerBuilder<IWorkout, SharedActions>(handlers);
