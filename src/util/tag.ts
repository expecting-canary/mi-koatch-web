import { ITagged } from 'src/types'

export function hasTag<T extends ITagged>( item: T, tag: string ) {
  return Array.isArray( item.tags ) && item.tags.includes( tag )
}

export function hasTagThenDo<T extends ITagged, R>(
  item: T,
  tag: string,
  callback: ( item: T, tag: string ) => R,
): R | void {
  if( hasTag( item, tag ) ) {
    return callback( item, tag )
  }
}
