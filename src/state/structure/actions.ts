import { STRUCTURE_START, STRUCTURE_UPDATE, STRUCTURE_STOP, STRUCTURE_ADD } from 'src/state';
import { Structure, StructureUpdater } from 'src/models';
import { createAction } from '@reduxjs/toolkit';

export const addStructureAction = createAction(STRUCTURE_ADD, (serie: Structure | Structure[]) => {
  return { payload: serie };
});
export const startStructureAction = createAction(STRUCTURE_START, (id: Structure['id']) => {
  return { payload: id };
});
export const stopStructureAction = createAction(STRUCTURE_STOP, (id: Structure['id']) => {
  return { payload: id };
});
export const updateStructureAction = createAction(
  STRUCTURE_UPDATE,
  (id: Structure['id'], values: StructureUpdater) => {
    return { payload: { id, values } };
  }
);
