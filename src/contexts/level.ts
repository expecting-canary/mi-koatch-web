import constate from 'constate'
import { useThunk, workoutActionSelect } from 'src/state'

export const [ ContextProviderLevel, useContextLevel ] = constate(
  function( { level = -1 }: { level: number } ) {
    const dispatch = useThunk()
    const select = ( index: number ) => () => dispatch( workoutActionSelect( level, index ) )
    return select
  },
)
