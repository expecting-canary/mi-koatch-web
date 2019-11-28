export interface Action<T extends string> {
  type: T;
}

export interface PayloadAction<T extends string, V> {
  type: T;
  payload: V;
}
