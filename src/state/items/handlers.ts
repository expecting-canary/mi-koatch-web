import { IData, IItem, IItemUpdater } from 'src/types'

export function itemDoStart( item: IData ) {
  item.state = 'ONGOING'
  item.start = Date.now()
}
export function itemDoStop( item: IData ) {
  item.state = 'DONE'
  item.stop = Date.now()
}
export function itemDoUpdate( item: IItem, updater: IItemUpdater ) {
  Object.assign( item, updater )
}
