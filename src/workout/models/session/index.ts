import { create } from './create';
import { operation } from './operation';
import { get } from './get';

export const MSession = {
  new: create,
  do: operation,
  get
};
