import {
  Card,
  CardActionArea,
  CardContent,
  Divider,
  List,
  ListItem,
  ListSubheader,
  Typography,
} from '@material-ui/core';
import React from 'react';
import {
  EXERCICE_RUNNING,
  EXERCICE_WORKOUT,
  IStructureSession,
  STRUCTURE_ROTATION,
  STRUCTURE_SERIE,
  STRUCTURE_SESSION,
} from 'src/models';

interface IStructureSessionMainProps { session: IStructureSession }

export function StructureSessionMain( { session }: IStructureSessionMainProps ) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Session</Typography>
      </CardContent>
      <Divider />
      <CardActionArea>{mapContent( session.content )}</CardActionArea>
      <Divider />
      <CardActionArea>{mapContent( session.content )}</CardActionArea>
    </Card>
  );
}

function mapContent( content: IStructureSession[ 'content' ] ) {
  const subHeader = <ListSubheader component="div">Content</ListSubheader>;
  const listItems = content.map( ( item, index ) =>
    <ListItem button key={index}>{buildContentItem( item )}</ListItem>,
  );
  return <List subheader={subHeader}>{listItems}</List>;
}

function buildContentItem( item: IStructureSession[ 'content' ][ number ] ) {
  switch( item.type ) {
    case STRUCTURE_SESSION:
    case STRUCTURE_SERIE:
    case STRUCTURE_ROTATION:
      return 'Structure';
    case EXERCICE_RUNNING:
    case EXERCICE_WORKOUT:
      return 'Exercice';
  }
}
