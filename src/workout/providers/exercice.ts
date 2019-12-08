import constate from 'constate';
import { Exercice, ExerciceEditable } from 'src/workout/models';
import { useWorkoutContext } from 'src/workout/providers/workout';

function useUpdate({ id }: Exercice, key: ExerciceEditable) {
  const update: any = 0;
  return (value: number) => update({ id, [key]: value });
}

function useExercice({ exercice }: { exercice: Exercice }) {
  const context = useWorkoutContext();
  const update = {
    weight: useUpdate(exercice, 'weight'),
    repetitions: useUpdate(exercice, 'repetitions'),
    rest: useUpdate(exercice, 'rest'),
    series: useUpdate(exercice, 'series')
  };
  const next = context.next;
  const rest = context.rest;
  const select = () => context.select.exercice(exercice.id);
  return { exercice, update, next, select, rest };
}
export const [ExerciceContextProvider, useExerciceContext] = constate(useExercice);
