import { IStructureSession } from './items/structures'

export const structureSessionTest = {
  id: '0',
  state: 'TODO',
  type: 'STRUCTURE_SESSION',
  name: 'Session',
  root: true,
  start: 0,
  stop: 0,
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
  result: [ 'id' ],
} as IStructureSession;
