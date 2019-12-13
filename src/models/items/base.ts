import { ID, Progress } from 'src/models'

export interface IItemBase {
  id: ID

  root?: true
  template?: true

  state: Progress
  start: number
  stop: number
}

export interface IItemDataBase {
  name: string
  type: string
}
