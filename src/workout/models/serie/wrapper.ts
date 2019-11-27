import { State, ISerie as Type, Editable, Updater } from './type';
import { start, rest, stop, update } from './action';
import { init } from './init';
import { isStateBuilder } from './util';

export type ISerie = Type;
export type SerieState = State;
export type SerieEditable = Editable;
export type SerieUpdater = Updater;

export const Serie = {
  init,
  action: {
    start,
    rest,
    stop,
    update
  },
  util: {
    isStateBuilder
  }
};
