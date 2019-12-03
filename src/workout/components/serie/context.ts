import { createContext, useContext } from 'react';
import { ISerie } from 'src/workout/types';

export const SerieContext = createContext<ISerie>(null as any);
export function useSerieContext() {
  return useContext(SerieContext);
}
