import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import FlexView from 'react-flexview/lib';
import { Icon } from '../../../common/icon/icon';
import { IExercice } from '../../models';
import { ExerciceTimer } from './timer';

function ExerciceInfo({ exercice }: { exercice: IExercice }) {
  return (
    <FlexView wrap>
      <FlexView grow>{exercice.name}</FlexView>
      <FlexView hAlignContent="right">
        <FlexView width={70} hAlignContent="right" vAlignContent="center">
          <ExerciceTimer state={exercice} />
          &nbsp;
          <Icon icon={'clock'} far />
        </FlexView>
        <FlexView width={50} hAlignContent="right" vAlignContent="center">
          {exercice.series}
          &nbsp;
          <Icon icon={'redo'} />
        </FlexView>
        <FlexView width={50} hAlignContent="right" vAlignContent="center">
          {exercice.rest}
          &nbsp;
          <Icon icon={'hourglass'} far />
        </FlexView>
      </FlexView>
    </FlexView>
  );
}

export function ExerciceItem({ exercice, onClick }: { exercice?: IExercice; onClick?: () => void }) {
  return exercice ? (
    <ListGroupItem onClick={onClick}>
      <ExerciceInfo exercice={exercice} />
    </ListGroupItem>
  ) : null;
}
