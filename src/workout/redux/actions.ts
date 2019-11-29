import { SelectedActions, SessionActions } from '../models';
import { SharedActions } from './shared/actions';

export type WorkoutActions = SessionActions | SelectedActions | SharedActions;
