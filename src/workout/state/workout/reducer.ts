import { handlers } from './handlers';
import { reducerBuilder } from 'src/common/reducer.builder';
import { WorkoutSharedActions } from './actions';
import { IWorkout } from 'src/workout/types';

export const reducer = reducerBuilder<IWorkout, WorkoutSharedActions>(handlers);
