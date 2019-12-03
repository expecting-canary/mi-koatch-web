import { createContext, useContext } from 'react';
import { IExercice } from 'src/workout/types';

export const ExerciceContext = createContext<IExercice>(null as any);
export function useExerciceContext() {
  return useContext(ExerciceContext);
}
