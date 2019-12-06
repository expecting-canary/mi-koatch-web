type Enumerable = string | number | symbol;
type Cases<T extends Enumerable> = {
  [K in T]?: Function;
};

export function flatSwitch<T extends Enumerable>(key: T, cases: Cases<T>, defaultCase?: any) {
  const handler = cases[key];
  return handler ? handler() : defaultCase;
}
