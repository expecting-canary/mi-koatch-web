import { Serie } from 'src/workout/models';
import produce, { immerable } from 'immer';

function findByIdPredicate(id: string) {
  return <T extends { id: string }>(item: T) => item.id === id;
}
function findById(state: Serie[], id: string) {
  const res = state.find(findByIdPredicate(id));
  if (res) return res;
  else throw new Error();
}

class Test {
  [immerable] = true;
  _answer = 42;
  get answer() {
    return this._answer;
  }
  set answer(answer: number) {
    this._answer = answer;
  }

  reset() {
    this.answer = 0;
  }
}

console.log(new Test());
console.log(new Test().toString());
console.log(JSON.stringify(new Test()));
const test = Symbol();
const data = new Test();
(data as any)[test] = {};
const produced = produce(data, draft => {
  draft.reset();
});
(produced as any)[test].ref = 42;
console.log(data, produced, data === produced);

/*
const SECRET = Symbol();
function join<State, Table>(store: Store<State, Action<any>>, selector: (state: State) => Table) {
  return {
    do(proto, keySource, keyTarget) {
      return {
        where(predicate) {
          Object.defineProperty(proto, keyTarget, {
            get() {
              if (!(SECRET in this)) {
                this[SECRET] = {};
              }
              const secret = this[SECRET]
              if(!secret[keyTarget]) {
                secret[keyTarget] = {};
              }
              const memoize = secret[keyTarget];
            }
          })
        }
      };
    }
  };
}
*/
