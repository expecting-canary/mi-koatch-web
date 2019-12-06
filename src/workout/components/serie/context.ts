import constate from 'constate';
import { UseWorkout } from 'src/workout/state';
import { ISerie, SerieEditable, SerieUpdater } from 'src/workout/types';

function useUpdate(update: (serie: SerieUpdater) => void, { id }: ISerie, key: SerieEditable) {
  return (value: number) => update({ id, [key]: value });
}
function useSelect(id: string) {
  const select = UseWorkout.dispatch.select.serie();
  return () => select(id);
}

function useSerie({ serie }: { serie: ISerie }) {
  const updateSerie = UseWorkout.dispatch.update.serie();
  const update = {
    weight: useUpdate(updateSerie, serie, 'weight'),
    repetitions: useUpdate(updateSerie, serie, 'repetitions')
  };
  const next = UseWorkout.dispatch.next();
  const rest = UseWorkout.dispatch.rest();
  const select = useSelect(serie.id);
  return { serie, update, next, select, rest };
}

export const [SerieContextProvider, useSerieContext] = constate(useSerie);
