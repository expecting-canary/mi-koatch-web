import constate from 'constate';
import { Serie, SerieEditable } from 'src/workout/models';
import { useWorkoutContext } from 'src/workout/providers/workout';

function useUpdate({ id }: Serie, key: SerieEditable) {
  const update: any = 0;
  return (value: number) => update({ id, [key]: value });
}

function useSerie({ serie }: { serie: Serie }) {
  const context = useWorkoutContext();
  const update = {
    weight: useUpdate(serie, 'weight'),
    repetitions: useUpdate(serie, 'repetitions')
  };
  const next = context.next;
  const rest = context.rest;
  const select = context.select.serie;
  const trigger = context.trigger;
  return { serie, update, next, select, rest, trigger };
}

export const [SerieContextProvider, useSerieContext] = constate(useSerie);
