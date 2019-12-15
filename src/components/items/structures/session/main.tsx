import { Card, CardHeader, Divider } from '@material-ui/core'
import React from 'react'
import { IStructureSession, IStructureSessionData } from 'src/models'

import { StructureSessionContent } from './data'

interface IStructureSessionProps {
  session: IStructureSession | IStructureSessionData
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
