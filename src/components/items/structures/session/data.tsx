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
import { useSelector } from 'react-redux'
import {
  EXERCICE_RUNNING,
  EXERCICE_WORKOUT,
  STRUCTURE_ROTATION,
  STRUCTURE_SERIE,
  STRUCTURE_SESSION,
} from 'src/constants'
import { useContextLevel } from 'src/contexts'
import { getItems } from 'src/state'
import { ID, IItem } from 'src/types'
import { find } from 'src/util'

export function StructureSessionContent( { content }: { content: ID[] } ) {
  const items = useSelector( getItems )
  const listItems = content.map( ( key, index ) => {
    const item = find( items, key )
    return <Item {...{ index, item, key }} />
  } )
  return (
    <List disablePadding subheader={bulderHeader()} dense>
      {listItems}
    </List>
  )
}

interface ItemProps {
  index: number
  item: IItem
}

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

function buildContentItem( item: IItem ) {
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
