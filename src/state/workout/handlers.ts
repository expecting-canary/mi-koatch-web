import { IWorkout } from 'src/models'

export function workoutDoSelect(
  workout: IWorkout,
  level: number,
  index: number,
) {
  if( workout.type === 'STRUCTURE' ) {
    const size = workout.index.length
    if( size > level ) {
      workout.index = workout.index.slice( 0, size )
      workout.index[ level ] = index
    }
  }
}
