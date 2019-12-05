import constate from 'constate';
import { UseWorkout } from 'src/workout/state';
import { ISession } from 'src/workout/types';

function useStart() {
  const start = UseWorkout.dispatch.start();
  return () => start();
}
function useSelect(id: string) {
  const dispatch = UseWorkout.dispatch.select.session();
  return () => dispatch(id);
}

function useSession({ session }: { session: ISession }) {
  const next = {
    0: UseWorkout.dispatch.next(),
    5: UseWorkout.dispatch.next(5),
    10: UseWorkout.dispatch.next(10),
    15: UseWorkout.dispatch.next(15)
  };
  const rest = UseWorkout.dispatch.rest();
  const select = useSelect(session.id);
  const start = useStart();
  return { session, next, rest, select, start };
}

export const [SessionContextProvider, useSessionContext] = constate(useSession);
