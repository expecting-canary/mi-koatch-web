import { Card, CardContent, CardHeader, Divider } from '@material-ui/core'
import React from 'react'
import { IExerciceWorkout } from 'src/types'

import { ExerciceWorkoutData } from './data'

export function ExerciceWorkout( {
  workout,
}: {
  workout: IExerciceWorkout,
} ) {
  return (
    <Card>
      <CardHeader title="Exercice" />
      <Divider />
      <CardContent>
        <ExerciceWorkoutData workout={workout} />
      </CardContent>
    </Card>
  )
}
