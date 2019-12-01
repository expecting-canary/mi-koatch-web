import { ISelected } from 'src/workout/types';

export const get = {
  type(state: ISelected) {
    return state.type;
  },
  id(state: ISelected) {
    return state.id;
  }
};
