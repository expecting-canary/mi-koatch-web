import { createSlice } from '@reduxjs/toolkit';
import { ISerie } from 'src/workout/types';

function findByIdPredicate(id: string) {
  return <T extends { id: string }>(item: T) => item.id === id;
}
function findById(state: ISerie[], id: string) {
  const res = state.find(findByIdPredicate(id));
  if (res) return res;
  else throw new Error();
}

export const Serie = createSlice({
  name: 'serie',
  initialState: [] as ISerie[],
  reducers: {
    start(state, id: string) {
      const serie = findById(state, id);
    },
    stop(state, id: string) {}
  }
});
