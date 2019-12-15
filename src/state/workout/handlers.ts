import { IWorkout } from 'src/models'

export function workoutDoSelect(
  workout: IWorkout,
  level: number,
  index: number,
) {
  if( level >= 0 ) {
    if( workout.type === 'STRUCTURE' ) {
      const size = workout.index.length
      if( size > level ) {
        workout.index = workout.index.slice( 0, size - 1 )
        workout.index[ level ] = index
      } else if( size === level ) {
        workout.index[ level ] = index
      }
    }
  }
}
