import React from 'react'
import { RepetitionsPicker, WeightPicker } from 'src/blocks'
import { itemUpdate, useDispatch } from 'src/state'
import { IExerciceWorkout } from 'src/types'

export function ExerciceWorkoutData( {
  workout,
}: {
  workout: IExerciceWorkout,
} ) {
  const dispatch = useDispatch()
  const setWeight = ( weight: number ) =>
    dispatch( itemUpdate( workout.id, { weight } ) )
  const setRepetitions = ( repetitions: number ) =>
    dispatch( itemUpdate( workout.id, { repetitions } ) )
  return (
    <React.Fragment>
      <WeightPicker value={workout.weight} onChange={setWeight} />
      <RepetitionsPicker value={workout.repetitions} onChange={setRepetitions} />
    </React.Fragment>
  )
}
