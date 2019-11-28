import { action } from './action';
import { init } from './init';
import { isStateBuilder } from './util';

export const Serie = {
  init,
  action,
  util: {
    isStateBuilder
  }
};
export * from './type';
