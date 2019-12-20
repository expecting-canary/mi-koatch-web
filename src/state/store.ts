import { combineReducers, createStore } from 'redux'
import {
  EXERCICE_WORKOUT,
  STRUCTURE,
  STRUCTURE_SERIE,
  STRUCTURE_SESSION,
} from 'src/constants'
import { IState } from 'src/types'

import { itemsReducer } from './items'
import { workoutReducer } from './workout'

export const store = createStore( combineReducers( {
  items: itemsReducer,
  workout: workoutReducer,
} ), {
  items: [ {
    id: '1',
    state: 'TODO',
    type: STRUCTURE_SESSION,
    name: 'Session',
    root: true,
    start: 0,
    stop: 0,
    content: [ '2', '3', '1' ],
    results: [],
  }, {
    id: '2',
    state: 'TODO',
    type: EXERCICE_WORKOUT,
    name: 'Workout',
    root: true,
    start: 0,
    stop: 0,

    repetitions: 10,
    weight: 20,
  }, {
    id: '3',
    state: 'TODO',
    type: STRUCTURE_SERIE,
    name: 'Serie',
    root: true,
    start: 0,
    stop: 0,
    series: 2,
    rest: 90,
    content: '2',
    results: [],
  } ],
  workout: {
    type: STRUCTURE,
    id: '1',
    index: [ 0 ],
  },
} as IState )
