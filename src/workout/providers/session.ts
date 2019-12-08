import constate from 'constate';
import { useWorkoutContext } from 'src/workout/providers/workout';
import { Session } from 'src/workout/models';

function useSession() {
  const context = useWorkoutContext();
  const session = context.selected.session as Session;
  const select = () => context.select.session(session.id);
  const start = context.start;
  return { session, select, start };
}

export const [SessionContextProvider, useSessionContext] = constate(useSession);
