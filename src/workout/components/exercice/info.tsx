import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import FlexView from 'react-flexview/lib';
import { Icon } from 'src/common/icon/icon';
import { Exercice } from 'src/workout/models';
import { ExerciceContextProvider, useExerciceContext } from '../../providers/exercice';
import { ExerciceTimer } from './timer';

function ExerciceInfo() {
  const { exercice, select } = useExerciceContext();
  return (
    <ListGroupItem onClick={select}>
      <FlexView wrap>
        <FlexView grow>{exercice.name}</FlexView>
        <Details />
      </FlexView>
    </ListGroupItem>
  );
}

/// DETAILS

function Details() {
  return (
    <FlexView hAlignContent="right">
      <TimerDetail />
      <RestDetail />
      <SeriesDetail />
    </FlexView>
  );
}
function TimerDetail() {
  return (
    <FlexView width={70} hAlignContent="right" vAlignContent="center">
      <ExerciceTimer />
      &nbsp;
      <Icon icon={'clock'} far />
    </FlexView>
  );
}

function RestDetail() {
  const { exercice } = useExerciceContext();
  return (
    <FlexView width={50} hAlignContent="right" vAlignContent="center">
      {exercice.rest}
      &nbsp;
      <Icon icon={'hourglass'} far />
    </FlexView>
  );
}
function SeriesDetail() {
  const { exercice } = useExerciceContext();
  return (
    <FlexView width={50} hAlignContent="right" vAlignContent="center">
      {exercice.series}
      &nbsp;
      <Icon icon={'redo'} />
    </FlexView>
  );
}

///

export function ExerciceItem({ exercice }: { exercice?: Exercice }) {
  return exercice ? (
    <ExerciceContextProvider exercice={exercice}>
      <ExerciceInfo />
    </ExerciceContextProvider>
  ) : null;
}
