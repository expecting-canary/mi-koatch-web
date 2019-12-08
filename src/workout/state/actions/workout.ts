import { Action, PayloadAction } from 'src/common/action';
import { WorkoutRestTrigger } from 'src/workout/models';

type SessionStart = Action<'WORKOUT_START'>;
type NextSerie = Action<'WORKOUT_NEXT'>;
type RestSerie = Action<'WORKOUT_REST'>;
type SetRestTrigger = PayloadAction<
  'WORKOUT_TRIGGER_REST',
  Pick<WorkoutRestTrigger, 'id' | 'delay'>
>;

type WorkoutSession = SessionStart | NextSerie | RestSerie | SetRestTrigger;

type WorkoutSelectSession = PayloadAction<'WORKOUT_SELECT_SESSION', string>;
type WorkoutSelectExercice = PayloadAction<'WORKOUT_SELECT_EXERCICE', string>;
type WorkoutSelectSerie = PayloadAction<'WORKOUT_SELECT_SERIE', string>;

type WorkoutSelect = WorkoutSelectSession | WorkoutSelectExercice | WorkoutSelectSerie;

export type WorkoutActions = WorkoutSelect | WorkoutSession;
