import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { IState } from 'src/models'

export type Dispatch = ThunkDispatch<IState, never, Action>
