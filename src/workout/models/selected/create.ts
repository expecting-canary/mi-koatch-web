import { ISelected } from 'src/workout/types';

export function create(): ISelected {
  return {
    type: 'NONE',
    id: ''
  };
}
