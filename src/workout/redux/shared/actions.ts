import { Action } from '../../../common/action';

type SessionStart = Action<'START'>;
type NextSerie = Action<'NEXT'>;

export type SharedActions = SessionStart | NextSerie;
