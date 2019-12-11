import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { Add, Edit } from '@material-ui/icons';
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
        <Typography variant="h4">Session</Typography>
      </CardContent>
      <Divider />
      <CardHeader action={<AddButton />} title="Session" />
      <MapContent content={session.content} />
      <Divider />
      <MapContent content={session.content} />
    </Card>
  );
}

function AddButton() {
  return (
    <IconButton>
      <Add />
    </IconButton>
  );
}

function MapContent( { content }: { content: IStructureSession[ 'content' ] } ) {
  const listItems = content.map( ( item, index ) => {
    return (
      <ListItem key={index}>
        <ListItemText primary={buildContentItem( item )} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="comments">
            <Edit />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  } );
  return <List disablePadding >{listItems}</List>;
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
