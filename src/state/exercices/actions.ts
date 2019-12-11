import { createAction } from '@reduxjs/toolkit';
import { Exercice, ExerciceUpdater, ID } from 'src/models';

import { EXERCICE_ADD, EXERCICE_START, EXERCICE_STOP, EXERCICE_UPDATE } from '../action';

export const exerciceActionAdd = createAction(
  EXERCICE_ADD,
  ( exercice: Exercice | Exercice[] ) => ( { payload: exercice } ),
);
export const exerciceActionStart = createAction(
  EXERCICE_START,
  ( id: ID ) => ( { payload: id } ),
);
export const exerciceActionStop = createAction(
  EXERCICE_STOP,
  ( id: ID ) => ( { payload: id } ),
);
export const exerciceActionUpdate = createAction(
  EXERCICE_UPDATE,
  ( id: ID, values: ExerciceUpdater ) => ( { payload: { id, values } } ),
);