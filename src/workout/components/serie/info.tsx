import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import FlexView from 'react-flexview';
import { Icon } from 'src/common/icon/icon';
import { MSerie } from 'src/workout/models';
import { UseWorkout } from 'src/workout/state';
import { ISerie } from 'src/workout/types';
import { SerieTimer } from './timer';

function useSelect(id: string) {
  const selectSerie = UseWorkout.dispatch.select.serie();
  return () => selectSerie(id);
}

function SerieInfo({ serie, index }: { serie: ISerie; index: number }) {
  const onClick = useSelect(serie.id);
  return (
    <ListGroupItem onClick={onClick}>
      <FlexView wrap>
        <FlexView grow>Serie {index + 1}</FlexView>
        <Details serie={serie} />
      </FlexView>
    </ListGroupItem>
  );
}

/// DETAILS

const Details = ({ serie }: { serie: ISerie }) => (
  <FlexView hAlignContent="right">
    <TimerDetail serie={serie} />
    {WeightDetail(serie)}
    {RepetitionsDetail(serie)}
  </FlexView>
);

const TimerDetail = ({ serie }: { serie: ISerie }) => (
  <FlexView width={70} hAlignContent="right" vAlignContent="center">
    <SerieTimer state={serie} />
    &nbsp;
    {TimerIcon(serie)}
  </FlexView>
);

const TimerIcon = (serie: ISerie) =>
  MSerie.util.isState(serie, 'RESTING') ? <Icon icon={'hourglass'} far /> : <Icon icon={'clock'} far />;

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
