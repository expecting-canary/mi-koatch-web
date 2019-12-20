import React from 'react'
import { useSelector } from 'react-redux'
import { Item } from 'src/components'
import { ContextProviderLevel } from 'src/contexts'
import { getItems, workoutSelector } from 'src/state'
import { IItem } from 'src/types'
import { find } from 'src/util'

export function Workout() {
  const workout = useSelector( workoutSelector )
  const items = useSelector( getItems )
  switch( workout.type ) {
    case 'NONE':
      return <span>None</span>
    case 'EXERCICE':
      return <span>Exercice</span>
    case 'STRUCTURE':
      const structure = find( items, workout.id )
      const datas = [ structure ] as IItem[]

      workout.index.forEach( ( index, i ) => {
        const last = datas[ i ]
        let data: IItem
        switch( last.type ) {
          case 'STRUCTURE_SESSION':
            data = 'results' in last && last.results[ index ]
              ? find( items, last.results[ index ] )
              : find( items, last.content[ index ] )
            break
          default:
            throw new Error()
        }
        datas.push( data )
      } )

      const Items = datas.map( ( data, index ) => (
        <ContextProviderLevel key={index} level={index}>
          <Item item={data} />
          <br/>
        </ContextProviderLevel>
      ) )

      return <div>{Items}</div>
  }
}
