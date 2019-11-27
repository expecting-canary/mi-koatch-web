/// IMPORTS

///

/// TYPES

type Type = 'NONE' | 'SESSION' | 'EXERCICE' | 'SERIE';

interface State {
  type: Type;
  id: string;
}

///

/// ACTIONS

interface SelectSession {
  type: 'SELECT_SESSION';
  payload: string;
}

interface SelectExercice {
  type: 'SELECT_EXERCICE';
  payload: string;
}

interface SelectSerie {
  type: 'SELECT_SERIE';
  payload: string;
}

type Actions = SelectSession | SelectExercice | SelectSerie;

///

/// GETTERS

const get = {
  type(state: State) {
    return state.type;
  },

  id(state: State) {
    return state.id;
  }
};

///

/// HANDLERS

function set(state: State, type: Type, id: string) {
  state.type = type;
  state.id = id;
}

///

/// REDUCER

const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case 'SELECT_SESSION':
      return set(state, 'SESSION', action.payload);
    case 'SELECT_EXERCICE':
      return set(state, 'EXERCICE', action.payload);
    case 'SELECT_SERIE':
      return set(state, 'SERIE', action.payload);
  }
};

///

/// WRAPPER

const Selected = {
  reducer,
  get
};

///

/// EXPORTS

export { Selected };
export type ISelected = State;
export type SelectedType = Type;

///
