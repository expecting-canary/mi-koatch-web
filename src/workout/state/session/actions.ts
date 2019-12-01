import { ExerciceUpdater, SerieUpdater } from 'src/workout/types';
import { Action, PayloadAction } from 'src/common/action';

type ExerciceUpdate = PayloadAction<'EXERCICE_UPDATE', ExerciceUpdater>;
type SerieUpdate = PayloadAction<'SERIE_UPDATE', SerieUpdater>;
type Rest = Action<'REST'>;

export type SessionActions = ExerciceUpdate | SerieUpdate | Rest;
