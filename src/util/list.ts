export function add<State extends { id: ID }, ID>(state: State[], data: State | State[], model?: Function) {
  data = Array.isArray(data) ? data : [data];
  data.forEach(item => {
    if (model) Object.setPrototypeOf(item, model.prototype);
    state.push(item);
  });
}

export function find<State extends { id: ID }, ID>(state: State[], id: ID) {
  const result = state.find(item => item.id === id);
  if (result) return result;
  throw new Error();
}

export function findOpt<State extends { id: ID }, ID>(state: State[], id: ID) {
  return state.find(item => item.id === id);
}
