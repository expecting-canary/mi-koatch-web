import React from 'react';
import FlexView from 'react-flexview';
import { Icon } from '../../../common/icon/icon';
import { ISerie, Serie } from 'src/workout/models';
import { SerieTimer } from './timer';
import { ListGroupItem } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { WorkoutDispatch } from 'src/workout/redux/store';

function useSelect(id: string) {
  const dispatch = useDispatch() as WorkoutDispatch;
  return function() {
    dispatch({ type: 'SELECT_SERIE', payload: id });
  };
}

function SerieInfo({ serie, index }: { serie: ISerie; index: number }) {
  const onClick = useSelect(serie.id);
  return (
    <ListGroupItem onClick={onClick}>
      <FlexView wrap>
        <FlexView grow>Serie {index + 1}</FlexView>
        {Details(serie)}
      </FlexView>
    </ListGroupItem>
  );
}

/// DETAILS

const Details = (serie: ISerie) => (
  <FlexView hAlignContent="right">
    {TimerDetail(serie)}
    {WeightDetail(serie)}
    {RepetitionsDetail(serie)}
  </FlexView>
);

const TimerDetail = (serie: ISerie) => (
  <FlexView width={70} hAlignContent="right" vAlignContent="center">
    <SerieTimer state={serie} />
    &nbsp;
    {TimerIcon(serie)}
  </FlexView>
);

const TimerIcon = (serie: ISerie) =>
  Serie.util.isState(serie, 'RESTING') ? <Icon icon={'hourglass'} far /> : <Icon icon={'clock'} far />;

const WeightDetail = (serie: ISerie) => (
  <FlexView width={50} hAlignContent="right" vAlignContent="center">
    {serie.weight}
    &nbsp;
    <Icon icon={'dumbbell'} />
  </FlexView>
);

const RepetitionsDetail = (serie: ISerie) => (
  <FlexView width={50} hAlignContent="right" vAlignContent="center">
    {serie.repetitions}
    &nbsp;
    <Icon icon={'redo'} />
  </FlexView>
);

///

export function SerieItem({ serie, index = 1 }: { serie?: ISerie; index?: number }) {
  return serie ? <SerieInfo serie={serie} index={index} /> : null;
}
