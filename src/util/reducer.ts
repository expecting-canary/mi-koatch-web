import produce, { Immutable } from 'immer';
import { DB, DBModel } from 'src/util';
import { Action, PayloadAction } from '../common/action';

type AllAction = Action<string> | PayloadAction<string, any>;

type Handlers<Actions extends AllAction, State> = {
  [K in Actions['type']]: (state: State, payload?: any) => void;
};

export function reducerBuilder<State, Actions extends AllAction>(handlers: Handlers<Actions, State>) {
  function reducer(state: State, action: Actions) {
    if (action.type in handlers)
      handlers[action.type as Actions['type']](state, (action as PayloadAction<string, any>).payload);
  }
  return produce(reducer);
}

export function createDBReducer<State extends DBModel, Actions extends AllAction>(
  db: DB<State>,
  handlers: Handlers<Actions, DB<State>>
) {
  const reducer = produce((state: State[], action: Actions) => {
    db.set(state);
    if (action.type in handlers)
      handlers[action.type as Actions['type']](db, (action as PayloadAction<string, any>).payload);
  });
  return (state: State[], action: Actions) => {
    state = reducer(state as any, action);
    db.set(state);
    return state;
  };
}
