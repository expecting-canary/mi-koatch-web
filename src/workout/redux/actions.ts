import { SessionActions } from './session/actions';
import { SelectedActions } from './selected/actions';
import { SharedActions } from './shared';

export type WorkoutActions = SessionActions | SelectedActions | SharedActions;
