import { ExerciceState, IExercice } from '../../models/exercice.type';
import { State } from '../../models/state.type';

function exerciceIs(...states: ExerciceState[]) {
  return (exercice: IExercice) => states.includes(exercice.state);
}

function getCurrent(state: State) {
  return state.session.exercices.find(exerciceIs('ONGOING'));
}

function getNextTodo(state: State) {
  return state.session.exercices.find(exerciceIs('TODO'));
}

const exerciceSelectors = {
  current(state: State) {
    const current = getCurrent(state);
    if (current) return current;
    throw new Error();
  },
  todo(state: State) {
    const todo = getNextTodo(state);
    if (todo) return todo;
    throw new Error();
  }
};

export default exerciceSelectors;
