import { ExerciceActions } from './exercice';
import { SerieActions } from './serie';
import { SessionActions } from './session';

export type StateAction = SessionActions | SerieActions | ExerciceActions;
