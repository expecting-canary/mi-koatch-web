export type SelectedType = 'NONE' | 'SESSION' | 'EXERCICE' | 'SERIE';

export interface ISelected {
  type: SelectedType;
  id: string;
}
