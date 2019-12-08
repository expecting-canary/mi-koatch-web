import { immerable } from 'immer';
import { remove } from 'lodash';

export class DB<S extends { [immerable]?: boolean; id: string }> {
  data: S[] = [];
  model: Function;

  constructor(model: Function) {
    this.model = model;
  }

  set(data: S[]) {
    this.data = data;
  }

  add(...items: S[]) {
    this.data.push(...items);
    items.forEach(item => {
      item[immerable] = true;
      Object.setPrototypeOf(item, this.model.prototype);
    });
  }

  get(id?: string) {
    const res = this.data.find(item => item.id === id);
    if (res) return res;
    throw new Error('Data not found');
  }

  getOpt(id?: string) {
    return this.data.find(item => item.id === id);
  }

  getAll(...ids: string[]): S[] {
    if (ids.length > 0) {
      return ids.map(id => this.get(id));
    }
    return this.data;
  }

  delete(id: string): void;
  delete(item: S): void;
  delete(value: string | S): void {
    if (typeof value === 'string') this.data = remove(this.data, item => value === item.id);
    if (typeof value === 'object') this.data = remove(this.data, item => value.id === item.id);
  }
}
