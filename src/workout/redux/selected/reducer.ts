import { SelectedActions } from './actions';
import { handlers } from './handlers';
import { reducerBuilder } from 'src/common/reducer.builder';
import { ISelected } from 'src/workout/models';

export const selectedReducer = reducerBuilder<ISelected, SelectedActions>(handlers);
