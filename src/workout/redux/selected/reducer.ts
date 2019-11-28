import { SelectedActions } from './actions';
import { handlers } from './handlers';
import { reducerBuilder } from '../../../common/reducer.builder';
import { ISelected } from '../../models';

export const selectedReducer = reducerBuilder<ISelected, SelectedActions>(handlers);
