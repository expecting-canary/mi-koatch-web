import { PayloadAction } from 'src/common/action';
import { ExerciceUpdater } from '../../models';

type ExerciceUpdate = PayloadAction<'EXERCICE_UPDATE', ExerciceUpdater>;

export type ExerciceActions = ExerciceUpdate;
