import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import FlexView from 'react-flexview/lib';
import { Icon } from 'src/common/icon/icon';
import { UseWorkout } from 'src/workout/state';
import { IExercice } from 'src/workout/types';
import { ExerciceTimer } from './timer';
import { useExerciceContext, ExerciceContext } from './context';

function useSelect(id: string) {
  const select = UseWorkout.dispatch.select.exercice();
  return () => select(id);
}

function ExerciceInfo() {
  const exercice = useExerciceContext();
  const onClick = useSelect(exercice.id);
  return (
    <ListGroupItem onClick={onClick}>
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
  const exercice = useExerciceContext();
  return (
    <FlexView width={50} hAlignContent="right" vAlignContent="center">
      {exercice.rest}
      &nbsp;
      <Icon icon={'hourglass'} far />
    </FlexView>
  );
}
function SeriesDetail() {
  const exercice = useExerciceContext();
  return (
    <FlexView width={50} hAlignContent="right" vAlignContent="center">
      {exercice.series}
      &nbsp;
      <Icon icon={'redo'} />
    </FlexView>
  );
}

///

export function ExerciceItem({ exercice }: { exercice?: IExercice }) {
  return exercice ? (
    <ExerciceContext.Provider value={exercice}>
      <ExerciceInfo />
    </ExerciceContext.Provider>
  ) : null;
}
