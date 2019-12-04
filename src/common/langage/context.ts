import { createContext, useContext } from 'react';
import { fr } from './fr';

export const LangageContext = createContext(fr);

export function useLangage() {
  return useContext(LangageContext);
}
