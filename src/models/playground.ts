import { Structure } from './structures';
import { Exercice } from './exercice';

const structures: Structure[] = [
  {
    id: '0',
    state: 'TODO',
    type: 'SESSION',
    level: 0,
    name: '',
    start: 0,
    stop: 0,
    index: 0,
    content: [
      ['EXERCICE', '0'],
      ['STRUCTURE', '1']
    ]
  },
  {
    id: '1',
    state: 'TODO',
    type: 'SERIE',
    level: 1,
    name: '',
    start: 0,
    stop: 0,
    series: 2,
    content: {
      type: 'WORKOUT',
      weight: 10,
      repetitions: 10
    },
    rest: 90,
    result: [
      ['id1', 91],
      ['id2', 102]
    ]
  }
];

const exercices: Exercice[] = [
  {
    id: '0',
    state: 'TODO',
    type: 'WORKOUT',
    start: 0,
    stop: 0,
    repetitions: 10,
    weight: 20
  }
];
