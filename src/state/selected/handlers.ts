import { ISelected, ISelectedItem } from 'src/models'

export function selectedDoSelect( selected: ISelected, item: ISelectedItem ) {
  selected.push( item )
}
