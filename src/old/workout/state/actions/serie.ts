import { PayloadAction } from 'src/common/action';
import { Exercice, ExerciceUpdater } from '../../models';

export type SerieUpdateAction = PayloadAction<'SERIE_UPDATE', ExerciceUpdater>;
export type SerieStartAction = PayloadAction<'SERIE_START', Exercice['id']>;
export type SerieRestAction = PayloadAction<'SERIE_REST', Exercice['id']>;
export type SerieStopAction = PayloadAction<'SERIE_STOP', Exercice['id']>;

export type SerieActions = SerieUpdateAction | SerieStartAction | SerieRestAction | SerieStopAction;
