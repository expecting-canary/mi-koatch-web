import { Card, CardContent, CardHeader, Divider } from '@material-ui/core'
import React from 'react'
import { IExerciceWorkoutData, IExerciceWorkoutTemplate } from 'src/types'

import { ExerciceWorkoutData } from './data'

export function ExerciceWorkout( {
  workout,
}: {
  workout: IExerciceWorkoutTemplate | IExerciceWorkoutData,
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
