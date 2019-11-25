namespace Exercice {
  function currentSerie(exercice: Type) {
    return exercice.result.find(Serie.isStateBuilder('ONGOING', 'RESTING'));
  }

  export const get = {
    currentSerie
  };
}
