import { ID, Progress } from 'src/models'

export interface IStructureBase<Result extends any[] = []> {
  id: ID

  state: Progress

  level: number

  start: number
  stop: number

  result: Result
}

export interface IStructureDataBase {
  name: string
}
