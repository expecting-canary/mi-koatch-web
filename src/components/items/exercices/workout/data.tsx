import React from 'react'
import { RepetitionsPicker, WeightPicker } from 'src/blocks'
import { IExerciceWorkoutData } from 'src/types'

export function ExerciceWorkoutData( { data }: { data: IExerciceWorkoutData } ) {
  return (
    <React.Fragment>
      <WeightPicker value={data.weight} onChange={console.log} />
      <RepetitionsPicker value={data.repetitions} onChange={console.log} />
    </React.Fragment>
  )
}
