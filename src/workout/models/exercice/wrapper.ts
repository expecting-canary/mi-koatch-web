import { action } from './actions';
import { get } from './getters';
import { init } from './init';
import { Editable, IExercice as Type, State, Updater } from './type';

export type IExercice = Type;
export type ExerciceState = State;
export type ExerciceEditable = Editable;
export type ExerciceUpdater = Updater;

export const Exercice = {
  init,
  action,
  get
};
