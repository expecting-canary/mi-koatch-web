import { Card, CardHeader, Divider } from '@material-ui/core'
import React from 'react'
import { IStructureSession } from 'src/types'

import { StructureSessionContent } from './data'

interface IStructureSessionProps {
  session: IStructureSession
}

export function StructureSession( { session }: IStructureSessionProps ) {
  return (
    <Card>
      <CardHeader title="Session" />
      <Divider />
      <StructureSessionContent content={session.content} />
    </Card>
  )
}
