namespace Exercice {
  function start(exercice: Type) {
    exercice.state = 'ONGOING';
    exercice.start = new Date();
    nextSerie(exercice);
  }

  function stop(exercice: Type) {
    exercice.state = 'DONE';
    exercice.stop = new Date();
  }
  function nextSerie(exercice: Type) {
    const serie = get.currentSerie(exercice);
    const done = exercice.result.length === exercice.series;

    if (serie) Serie.action.stop(serie);
    if (!done) exerciceAddSerie(exercice);
    else stop(exercice);
  }

  function exerciceAddSerie(exercice: Type) {
    const todo = Serie.init(exercice);
    Serie.action.start(todo);
    exercice.result.push(todo);
  }

  export const action = {
    start,
    stop,
    nextSerie
  };
}
