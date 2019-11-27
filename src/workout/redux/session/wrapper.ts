import { get } from './getters';
import { reducer } from './reducer';
import { Actions } from './actions';

export type SessionActions = Actions;
export const SessionRedux = {
  reducer,
  get
};
