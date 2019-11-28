import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import FlexView from 'react-flexview/lib';
import { Icon } from '../../../common/icon/icon';
import { IExercice } from '../../models';
import { ExerciceTimer } from './timer';
import { useDispatch } from 'react-redux';
import { WorkoutDispatch } from 'src/workout/redux/store';

function useSelect(id: string) {
  const dispatch = useDispatch() as WorkoutDispatch;
  return function() {
    dispatch({ type: 'SELECT_EXERCICE', payload: id });
  };
}

function ExerciceInfo(exercice: IExercice) {
  const onClick = useSelect(exercice.id);
  return (
    <ListGroupItem onClick={onClick}>
      <FlexView wrap>
        <FlexView grow>{exercice.name}</FlexView>
        {Details(exercice)}
      </FlexView>
    </ListGroupItem>
  );
}

/// DETAILS

const Details = (exercice: IExercice) => (
  <FlexView hAlignContent="right">
    {TimerDetail(exercice)}
    {RestDetail(exercice)}
    {SeriesDetail(exercice)}
  </FlexView>
);

const TimerDetail = (exercice: IExercice) => (
  <FlexView width={70} hAlignContent="right" vAlignContent="center">
    <ExerciceTimer state={exercice} />
    &nbsp;
    <Icon icon={'clock'} far />
  </FlexView>
);

const RestDetail = (exercice: IExercice) => (
  <FlexView width={50} hAlignContent="right" vAlignContent="center">
    {exercice.rest}
    &nbsp;
    <Icon icon={'hourglass'} far />
  </FlexView>
);

const SeriesDetail = (exercice: IExercice) => (
  <FlexView width={50} hAlignContent="right" vAlignContent="center">
    {exercice.series}
    &nbsp;
    <Icon icon={'redo'} />
  </FlexView>
);

///

export function ExerciceItem({ exercice }: { exercice?: IExercice }) {
  return exercice ? ExerciceInfo(exercice) : null;
}
