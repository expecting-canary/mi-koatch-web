import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import { IStructureSerie, IStructureSerieData } from 'src/types'

interface IStructureSerieProps {
  serie: IStructureSerie | IStructureSerieData
}

export function StructureSerie( { serie }: IStructureSerieProps ) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Serie</Typography>
      </CardContent>
    </Card>
  )
}
