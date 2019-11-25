namespace Exercice {
  export function init(): Type {
    return {
      state: 'TODO',
      type: ExerciceType.None,
      name: 'Empty',
      start: new Date(),
      stop: new Date(),
      rest: 90,
      weight: 0,
      series: 4,
      repetitions: 10,
      result: []
    };
  }
}