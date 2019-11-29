import { selector } from './model/selector';
import { reducer } from './reducer';
import { operation } from './model/operation';

export const Selected = {
  operation,
  selector,
  reducer
};
export * from './model/type';
export * from './actions';
