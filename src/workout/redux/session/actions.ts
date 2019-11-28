import { ExerciceUpdater, SerieUpdater } from '../../models';
import { Action, PayloadAction } from '../../../common/action';

type SessionStart = Action<'SESSION_START'>;
type SessionStop = Action<'SESSION_STOP'>;
type ExerciceUpdate = PayloadAction<'EXERCICE_UPDATE', ExerciceUpdater>;
type SerieUpdate = PayloadAction<'SERIE_UPDATE', SerieUpdater>;
type SerieRest = Action<'SERIE_REST'>;

export type SessionActions = SessionStart | SessionStop | ExerciceUpdate | SerieUpdate | SerieRest;

const test: SerieRest = {type: 'SERIE_REST'};