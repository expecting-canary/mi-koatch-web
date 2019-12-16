import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
} from '@material-ui/core'
import { Add, Edit } from '@material-ui/icons'
import React from 'react'
import { useContextLevel } from 'src/contexts'
import {
  EXERCICE_RUNNING,
  EXERCICE_WORKOUT,
  IItemData,
  IStructureSession,
  STRUCTURE_ROTATION,
  STRUCTURE_SERIE,
  STRUCTURE_SESSION,
} from 'src/types'

interface StructureSessionContentProps {
  content: IStructureSession[ 'content' ]
}

export function StructureSessionContent( {
  content,
}: StructureSessionContentProps ) {
  const listItems = content.map( ( item, index ) =>
    <Item {...{ index, item, key: index }} />,
  )
  return (
    <List disablePadding subheader={bulderHeader()} dense>
      {listItems}
    </List>
  )
}

interface ItemProps { index: number, item: IItemData }

function Item( { index, item }: ItemProps ) {
  const select = useContextLevel()
  return (
    <ListItem button onClick={select( index )}>
      <ListItemText primary={buildContentItem( item )} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="edit">
          <Edit />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

function bulderHeader() {
  return (
    <ListSubheader>
      <Grid container direction="row" justify="space-between">
        Content
        <IconButton>
          <Add />
        </IconButton>
      </Grid>
    </ListSubheader>
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
