import {
  Card,
  CardActionArea,
  CardContent,
  ListItem,
  Typography,
  List,
  ListSubheader,
  Divider
} from '@material-ui/core';
import React from 'react';
import {
  EXERCICE_RUNNING,
  EXERCICE_WORKOUT,
  StructureSession,
  STRUCTURE_ROTATION,
  STRUCTURE_SERIE,
  STRUCTURE_SESSION
} from 'src/models';

type StructureSessionMainProps = { session: StructureSession };

export function StructureSessionMain({ session }: StructureSessionMainProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Session</Typography>
      </CardContent>
      <Divider />
      <CardActionArea>{mapContent(session.content)}</CardActionArea>
      <Divider />
      <CardActionArea>{mapContent(session.content)}</CardActionArea>
    </Card>
  );
}

function mapContent(content: StructureSession['content']) {
  const subHeader = <ListSubheader component="div">Content</ListSubheader>;
  const listItems = content.map((item, index) => <ListItem button key={index}>{buildContentItem(item)}</ListItem>);
  return <List subheader={subHeader}>{listItems}</List>;
}

function buildContentItem(item: StructureSession['content'][number]) {
  switch (item.type) {
    case STRUCTURE_SESSION:
    case STRUCTURE_SERIE:
    case STRUCTURE_ROTATION:
      return 'Structure';
    case EXERCICE_RUNNING:
    case EXERCICE_WORKOUT:
      return 'Exercice';
  }
}
