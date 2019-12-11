import { IStructureSession } from './structures';

export const structureSessionTest = {
  id: '0',
  state: 'TODO',
  type: 'STRUCTURE_SESSION',
  level: 0,
  name: '',
  start: 0,
  stop: 0,
  content: [
    {
      type: 'EXERCICE_WORKOUT',
      repetitions: 10,
      weight: 20,
    },
    {
      type: 'STRUCTURE_SERIE',
      series: 2,
      rest: 90,
      content: {
        type: 'EXERCICE_WORKOUT',
        weight: 10,
        repetitions: 10,
      },
    },
  ],
  result: [ 'id' ],
} as IStructureSession;
