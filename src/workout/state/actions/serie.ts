import { PayloadAction } from 'src/common/action';
import { SerieUpdater, Serie } from '../../models';

type SerieUpdate = PayloadAction<'SERIE_UPDATE', SerieUpdater>;
type SerieRest = PayloadAction<'SERIE_REST', Serie['id']>;

export type SerieActions = SerieUpdate | SerieRest;
