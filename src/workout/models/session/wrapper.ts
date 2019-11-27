import { State, ISession as Type } from './type';
import { init } from './init';
import { action } from './actions';
import { get } from './getters';

export const Session = {
  init,
  action,
  get
};
export type ISession = Type;
export type SessionState = State;
