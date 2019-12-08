import { Action, PayloadAction } from './action';

type AllAction = Action<string> | PayloadAction<string, any>;

type Handlers<Actions extends AllAction, State> = {
  [K in Actions['type']]: (state: State, payload?: any) => void;
};

export function reducerBuilder<State, Actions extends AllAction>(
  handlers: Handlers<Actions, State>
) {
  return function reducer(state: State, action: Actions) {
    if (action.type in handlers)
      handlers[action.type as Actions['type']](
        state,
        (action as PayloadAction<string, any>).payload
      );
    return state as State;
  };
}
