namespace Serie {
  function start(serie: Type) {
    serie.state = 'ONGOING';
    serie.start = new Date();
  }
  function rest(serie: Type) {
    serie.state = 'RESTING';
    serie.rest = new Date();
  }
  function stop(serie: Type) {
    serie.state = 'DONE';
    serie.stop = new Date();
  }

  export const action = {
    start,
    rest,
    stop
  };
}
