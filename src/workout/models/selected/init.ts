import { ISelected } from './type';

export function init(): ISelected {
  return {
    type: 'NONE',
    id: ''
  };
}
