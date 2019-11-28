import { ISelected } from './type';

export const get = {
  type(state: ISelected) {
    return state.type;
  },
  id(state: ISelected) {
    return state.id;
  }
};
