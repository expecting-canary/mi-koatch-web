import { ISelected } from './type';

export const selector = {
  type(state: ISelected) {
    return state.type;
  },
  id(state: ISelected) {
    return state.id;
  }
};
