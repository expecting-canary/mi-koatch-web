import { SelectedActions } from './actions';
import { handlers } from './handlers';
import { reducerBuilder } from 'src/common/reducer.builder';
import { ISelected } from 'src/workout/types';

export const reducer = reducerBuilder<ISelected, SelectedActions>(handlers);
