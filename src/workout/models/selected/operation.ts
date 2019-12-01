import { ISelected, SelectedType } from 'src/workout/types';

function set(state: ISelected, type: SelectedType, id = '') {
  state.type = type;
  state.id = id;
}

export const operation = {
  select: {
    session(state: ISelected, id: string) {
      set(state, 'SESSION', id);
    },
    exercice(state: ISelected, id: string) {
      set(state, 'EXERCICE', id);
    },
    serie(state: ISelected, id: string) {
      set(state, 'SERIE', id);
    },
    none(state: ISelected) {
      set(state, 'NONE');
    }
  }
};
