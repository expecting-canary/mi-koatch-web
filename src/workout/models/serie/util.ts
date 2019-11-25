namespace Serie {
  export function isStateBuilder(...states: State[]) {
    return (serie: Type) => states.includes(serie.state);
  }
}
