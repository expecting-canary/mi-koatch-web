import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import FlexView from 'react-flexview';
import { Icon } from 'src/common/icon/icon';
import { MSerie } from 'src/workout/models';
import { UseWorkout } from 'src/workout/state';
import { ISerie, IExercice } from 'src/workout/types';
import { SerieTimer } from './timer';
import { SerieContext, useSerieContext } from './context';
import { ExerciceContext, useExerciceContext } from '../exercice/context';

function useSelect(id: string) {
  const selectSerie = UseWorkout.dispatch.select.serie();
  return () => selectSerie(id);
}

function SerieInfo() {
  const exercice = useExerciceContext();
  const serie = useSerieContext();
  const index = exercice.result.findIndex(result => result.id === serie.id);
  const onClick = useSelect(serie.id);
  return (
    <ListGroupItem onClick={onClick}>
      <FlexView wrap>
        <FlexView grow>Serie {index + 1}</FlexView>
        <Details />
      </FlexView>
    </ListGroupItem>
  );
}

/// DETAILS

const Details = () => (
  <FlexView hAlignContent="right">
    <TimerDetail />
    <WeightDetail />
    <RepetitionsDetail />
  </FlexView>
);

function TimerDetail() {
  return (
    <FlexView width={70} hAlignContent="right" vAlignContent="center">
      <SerieTimer />
      &nbsp;
      <TimerIcon />
    </FlexView>
  );
}

function TimerIcon() {
  const serie = useSerieContext();
  return MSerie.util.isState(serie, 'RESTING') ? <Icon icon={'hourglass'} far /> : <Icon icon={'clock'} far />;
}
function WeightDetail() {
  const serie = useSerieContext();
  return (
    <FlexView width={50} hAlignContent="right" vAlignContent="center">
      {serie.weight}
      &nbsp;
      <Icon icon={'dumbbell'} />
    </FlexView>
  );
}
function RepetitionsDetail() {
  const serie = useSerieContext();
  return (
    <FlexView width={50} hAlignContent="right" vAlignContent="center">
      {serie.repetitions}
      &nbsp;
      <Icon icon={'redo'} />
    </FlexView>
  );
}

///

export function SerieItem({ serie, exercice }: { serie?: ISerie; exercice?: IExercice }) {
  return serie && exercice ? (
    <ExerciceContext.Provider value={exercice}>
      <SerieContext.Provider value={serie}>
        <SerieInfo />
      </SerieContext.Provider>
    </ExerciceContext.Provider>
  ) : null;
}
