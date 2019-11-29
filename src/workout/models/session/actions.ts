import { ExerciceUpdater, SerieUpdater } from '../../models';
import { Action, PayloadAction } from '../../../common/action';

type ExerciceUpdate = PayloadAction<'EXERCICE_UPDATE', ExerciceUpdater>;
type SerieUpdate = PayloadAction<'SERIE_UPDATE', SerieUpdater>;
type SerieRest = Action<'SERIE_REST'>;

export type SessionActions = ExerciceUpdate | SerieUpdate | SerieRest;
