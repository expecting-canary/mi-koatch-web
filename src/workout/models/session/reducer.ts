import { ISession } from '../../models';
import { handlers } from './handlers';
import { SessionActions } from './actions';
import { reducerBuilder } from 'src/common/reducer.builder';

export const reducer = reducerBuilder<ISession, SessionActions>(handlers);
