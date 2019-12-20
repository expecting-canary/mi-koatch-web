import { IItem, IItemUpdater } from 'src/types'

export function itemDoStart( item: IItem ) {
  item.state = 'ONGOING'
  item.start = Date.now()
}
export function itemDoStop( item: IItem ) {
  item.state = 'DONE'
  item.stop = Date.now()
}
export function itemDoUpdate( item: IItem, updater: IItemUpdater ) {
  Object.assign( item, updater )
}
