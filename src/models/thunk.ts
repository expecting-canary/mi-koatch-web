import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { IState } from './state';

export type Thunk<ReturnType = void> = ThunkAction<ReturnType, IState, never, Action>;
