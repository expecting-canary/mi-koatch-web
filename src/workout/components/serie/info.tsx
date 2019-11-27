import React from 'react';
import FlexView from 'react-flexview';
import { Icon } from '../../../common/icon/icon';
import { ISerie } from '../../models';
import { SerieTimer } from './timer';
import { ListGroupItem } from 'react-bootstrap';

function SerieInfo({ serie, index }: { serie: ISerie; index: number }) {
  return (
    <FlexView wrap>
      <FlexView grow>Serie {index + 1}</FlexView>
      <FlexView hAlignContent="right">
        <FlexView width={70} hAlignContent="right" vAlignContent="center">
          <SerieTimer state={serie} />
          &nbsp;
          <Icon icon={'clock'} far />
        </FlexView>
        <FlexView width={50} hAlignContent="right" vAlignContent="center">
          {serie.repetitions}
          &nbsp;
          <Icon icon={'redo'} />
        </FlexView>
        <FlexView width={50} hAlignContent="right" vAlignContent="center">
          {serie.weight}
          &nbsp;
          <Icon icon={'dumbbell'} />
        </FlexView>
      </FlexView>
    </FlexView>
  );
}

export function SerieItem({ serie, index = 1, onClick }: { serie?: ISerie; index?: number; onClick?: () => void }) {
  return serie ? (
    <ListGroupItem onClick={onClick}>
      <SerieInfo serie={serie} index={index} />
    </ListGroupItem>
  ) : null;
}
