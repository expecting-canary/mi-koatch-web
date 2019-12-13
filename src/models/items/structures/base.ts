import { IItemBase, IItemDataBase } from 'src/models'

export interface IStructureBase<Result extends any[] = []> extends IItemBase {
  result: Result
}

export type IStructureDataBase = IItemDataBase
