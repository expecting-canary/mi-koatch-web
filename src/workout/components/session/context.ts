import { createContext, useContext } from 'react';
import { ISession } from 'src/workout/types';

export const SessionContext = createContext<ISession>(null as any);
export function useSessionContext() {
  return useContext(SessionContext);
}
