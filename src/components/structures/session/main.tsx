import {
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Typography,
} from '@material-ui/core'
import { Add, Edit } from '@material-ui/icons'
import React from 'react'
import {
  EXERCICE_RUNNING,
  EXERCICE_WORKOUT,
  IStructureSession,
  STRUCTURE_ROTATION,
  STRUCTURE_SERIE,
  STRUCTURE_SESSION,
} from 'src/models'

interface IStructureSessionMainProps {
  session: IStructureSession
}

export function StructureSessionMain( { session }: IStructureSessionMainProps ) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Session</Typography>
      </CardContent>
      <Divider />
      <MapContent content={session.content} />
    </Card>
  )
}

function MapContent( { content }: { content: IStructureSession[ 'content' ] } ) {
  const subHeader = (
    <ListSubheader>
      <Grid container direction="row" justify="space-between">
        Content
        <IconButton>
          <Add />
        </IconButton>
      </Grid>
    </ListSubheader>
  )
  const listItems = content.map( ( item, index ) => (
    <ListItem button key={index}>
      <ListItemText primary={buildContentItem( item )} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="edit">
          <Edit />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  ) )
  return (
    <List disablePadding subheader={subHeader}>
      {listItems}
    </List>
  )
}

function buildContentItem( item: IStructureSession[ 'content' ][ number ] ) {
  switch( item.type ) {
    case STRUCTURE_SESSION:
    case STRUCTURE_SERIE:
    case STRUCTURE_ROTATION:
      return 'Structure'
    case EXERCICE_RUNNING:
    case EXERCICE_WORKOUT:
      return 'Exercice'
  }
}
