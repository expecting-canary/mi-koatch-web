import { Action, PayloadAction } from 'src/common/action';
import { SessionActions } from '../session';
import { SelectedActions } from '../selected';
import { IRestTrigger } from 'src/workout/types';

type SessionStart = Action<'START'>;
type NextSerie = Action<'NEXT'>;
type SetRestTrigger = PayloadAction<'TRIGGER_REST', Pick<IRestTrigger, 'id' | 'delay'>>;

export type WorkoutSharedActions = SessionStart | NextSerie | SetRestTrigger;

export type WorkoutActions = SessionActions | SelectedActions | WorkoutSharedActions;
