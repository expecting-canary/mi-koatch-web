import { createAction } from '@reduxjs/toolkit';
import { IStructure, IStructureUpdater } from 'src/models';
import { STRUCTURE_ADD, STRUCTURE_START, STRUCTURE_STOP, STRUCTURE_UPDATE } from 'src/state';

export const structureActionAdd = createAction(
  STRUCTURE_ADD,
  ( serie: IStructure | IStructure[] ) => {
    return { payload: serie };
  } );
export const structureActionStart = createAction(
  STRUCTURE_START,
  ( id: IStructure[ 'id' ] ) => {
    return { payload: id };
  } );
export const structureActionStop = createAction(
  STRUCTURE_STOP,
  ( id: IStructure[ 'id' ] ) => {
    return { payload: id };
  } );
export const structureActionUpdate = createAction(
  STRUCTURE_UPDATE,
  ( id: IStructure[ 'id' ], values: IStructureUpdater ) => {
    return { payload: { id, values } };
  } );
