import { combineReducers, createStore } from 'redux'
import {
  IState,
  IStructureSession,
  IStructureSessionData,
  STRUCTURE,
} from 'src/models'

import { itemsReducer } from './items'
import { workoutReducer } from './workout'

export const store = createStore( combineReducers( {
  items: itemsReducer,
  workout: workoutReducer,
} ), {
  items: [ {
    id: '1',
    state: 'TODO',
    type: 'STRUCTURE_SESSION',
    name: 'Session',
    root: true,
    start: 0,
    stop: 0,
    content: [
      {
        type: 'STRUCTURE_SESSION',
        name: 'Session',
        content: [
          {
            type: 'EXERCICE_WORKOUT',
            name: 'Workout',
            repetitions: 10,
            weight: 20,
          },
          {
            type: 'STRUCTURE_SERIE',
            name: 'Serie',
            series: 2,
            rest: 90,
            content: {
              type: 'EXERCICE_WORKOUT',
              name: 'Workout',
              weight: 10,
              repetitions: 10,
            },
          },
        ],
      } as IStructureSessionData,
      {
        type: 'EXERCICE_WORKOUT',
        name: 'Workout',
        repetitions: 10,
        weight: 20,
      },
      {
        type: 'STRUCTURE_SERIE',
        name: 'Serie',
        series: 2,
        rest: 90,
        content: {
          type: 'EXERCICE_WORKOUT',
          name: 'Workout',
          weight: 10,
          repetitions: 10,
        },
      },
    ],
    result: [],
  } as IStructureSession ],
  workout: {
    type: STRUCTURE,
    id: '1',
    index: [ 0 ],
  },
} as IState )
