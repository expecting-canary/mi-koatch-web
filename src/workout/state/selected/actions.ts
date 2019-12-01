import { PayloadAction } from 'src/common/action';

type SelectSession = PayloadAction<'SELECT_SESSION', string>;
type SelectExercice = PayloadAction<'SELECT_EXERCICE', string>;
type SelectSerie = PayloadAction<'SELECT_SERIE', string>;

export type SelectedActions = SelectSession | SelectExercice | SelectSerie;
