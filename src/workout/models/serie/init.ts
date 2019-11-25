namespace Serie {
  export function init(exercice?: Exercice.Type): Type {
    return {
      state: 'TODO',
      start: new Date(),
      rest: new Date(),
      stop: new Date(),
      weight: exercice ? exercice.weight : 0,
      repetitions: exercice ? exercice.repetitions : 10
    };
  }
}
