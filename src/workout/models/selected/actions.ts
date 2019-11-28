import { ISelected, SelectedType } from './type';

function set(state: ISelected, type: SelectedType, id: string) {
  state.type = type;
  state.id = id;
}

export const action = {
  select: {
    session(state: ISelected, id: string) {
      set(state, 'SESSION', id);
    },
    exercice(state: ISelected, id: string) {
      set(state, 'EXERCICE', id);
    },
    serie(state: ISelected, id: string) {
      set(state, 'SERIE', id);
    }
  }
};
