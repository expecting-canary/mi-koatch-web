import { create } from './create';
import { operation } from './operation';
import { get } from './get';

export const Workout = {
  new: create,
  ...operation,
  get
};
