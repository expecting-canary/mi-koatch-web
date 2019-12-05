import constate from 'constate';
import { UseWorkout } from 'src/workout/state';
import { ISerie, SerieEditable, SerieUpdater } from 'src/workout/types';

function useUpdate(update: (serie: SerieUpdater) => void, { id }: ISerie, key: SerieEditable) {
  return (value: number) => update({ id, [key]: value });
}

function useSerie({ serie }: { serie: ISerie }) {
  const updateSerie = UseWorkout.dispatch.update.serie();
  const update = {
    weight: useUpdate(updateSerie, serie, 'weight'),
    repetitions: useUpdate(updateSerie, serie, 'repetitions')
  };
  return { serie, update };
}

export const [SerieContextProvider, useSerieContext] = constate(useSerie);
