import React from 'react';
import './App.scss';
import { StructureSessionMain } from 'src/components';
import { structureSessionTest } from 'src/models/playground';
import { Container } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <Container>
      <StructureSessionMain session={structureSessionTest} />
    </Container>
  );
};

export default App;
