import constate from 'constate';
import { UseWorkout } from 'src/workout/state';
import { ISession } from 'src/workout/types';

function useSelect(id: string) {
  const dispatch = UseWorkout.dispatch.select.session();
  return () => dispatch(id);
}

function useSession({ session }: { session: ISession }) {
  const select = useSelect(session.id);
  const start = UseWorkout.dispatch.start();
  return { session, select, start };
}

export const [SessionContextProvider, useSessionContext] = constate(useSession);
