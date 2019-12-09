import { createReducer } from '@reduxjs/toolkit';
import { Structure } from 'src/models';
import { add, find } from 'src/util/list';
import {
  addStructureAction,
  startStructureAction,
  stopStructureAction,
  updateStructureAction
} from './actions';
import { doStructureStart, doStructureStop, doStructureUpdate } from './handlers';

export const structuresReducer = createReducer<Structure[]>([], builder =>
  builder
    .addCase(addStructureAction, (state, { payload }) => {
      add(state, payload);
    })
    .addCase(startStructureAction, (state, { payload }) => {
      doStructureStart(find(state, payload));
    })
    .addCase(stopStructureAction, (state, { payload }) => {
      doStructureStop(find(state, payload));
    })
    .addCase(updateStructureAction, (state, { payload }) => {
      doStructureUpdate(find(state, payload.id), payload.values);
    })
);
