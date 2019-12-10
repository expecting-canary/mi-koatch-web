import { Dispatch } from 'redux';
import {
  ExerciceData,
  EXERCICE_RUNNING,
  EXERCICE_WORKOUT,
  State,
  StructureData,
  StructureSession,
  STRUCTURE_ROTATION,
  STRUCTURE_SERIE,
  STRUCTURE_SESSION
} from 'src/models';
import {
  exerciceActionStop,
  exerciceThunkCreate,
  structureActionStart,
  structureActionStop,
  structureThunkCreate,
  structureThunkNext
} from 'src/state';
import { structureActionUpdate } from '../actions';

export function structureSessionThunkStart(session: StructureSession) {
  return function(dispatch: Dispatch, getState: () => State) {
    dispatch(structureActionStart(session.id));
    structureSessionThunkNext(session)(dispatch, getState);
  };
}

export function structureSessionThunkNext(session: StructureSession) {
  return function(dispatch: Dispatch, getState: () => State) {
    if (session.state !== 'DONE') return 'DONE';
    let index = session.result.length;
    if (index > 0) {
      const state = contentNext(session, index, dispatch, getState);
      if (state !== 'DONE') return 'ONGOING';
    }
    if (session.content[index + 1]) {
      return contentStart(session, index + 1, dispatch, getState);
    }
    dispatch(structureActionStop(session.id));
    return 'DONE';
  };
}

function contentStart(session: StructureSession, index: number, dispatch: Dispatch, getState: () => State) {
  const item = switchStructureExercice(
    session.content[index],
    structureData => structureThunkCreate(structureData, true)(dispatch, getState),
    exerciceData => exerciceThunkCreate(exerciceData, true)(dispatch)
  );
  dispatch(structureActionUpdate(session.id, { result: [...session.result, item.id] }));
  return 'ONGOING';
}

function contentNext(session: StructureSession, index: number, dispatch: Dispatch, getState: () => State) {
  const id = session.result[index];
  const state = switchStructureExercice(
    session.content[index],
    () => structureThunkNext(id)(dispatch, getState),
    () => {
      dispatch(exerciceActionStop(id));
      return 'DONE';
    }
  );
  return state;
}

export function structureSessionThunkStop(session: StructureSession) {
  return function(dispatch: Dispatch) {
    dispatch(structureActionStop(session.id));
    return false;
  };
}

function switchStructureExercice<R1, R2>(
  data: StructureData | ExerciceData,
  structureCallback: (data: StructureData) => R1,
  exerciceCallback: (data: ExerciceData) => R2
): R1 | R2 {
  switch (data.type) {
    case STRUCTURE_SESSION:
    case STRUCTURE_SERIE:
    case STRUCTURE_ROTATION:
      return structureCallback(data);
    case EXERCICE_RUNNING:
    case EXERCICE_WORKOUT:
      return exerciceCallback(data);
  }
}
