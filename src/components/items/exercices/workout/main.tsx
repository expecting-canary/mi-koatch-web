import { Card, CardContent, CardHeader, Divider } from '@material-ui/core'
import React from 'react'
import { IExerciceWorkout, IExerciceWorkoutData } from 'src/models'

import { ExerciceWorkoutData } from './data'

export function ExerciceWorkout( {
  workout,
}: {
  workout: IExerciceWorkout | IExerciceWorkoutData,
} ) {
  return (
    <Card>
      <CardHeader title="Exercice" />
      <Divider />
      <CardContent>
        <ExerciceWorkoutData data={workout} />
      </CardContent>
    </Card>
  )
}
