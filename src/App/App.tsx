import './App.scss'

import { Container } from '@material-ui/core'
import React from 'react'
import { StructureSessionMain } from 'src/components'
import { structureSessionTest } from 'src/models/playground'

const App: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <StructureSessionMain session={structureSessionTest} />
    </Container>
  )
}

export default App
