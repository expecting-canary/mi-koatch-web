import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import FlexView from 'react-flexview';
import { Icon } from 'src/common/icon/icon';
import { useLangage } from 'src/common/langage/context';
import { Serie } from 'src/workout/models';
import { Exercice } from 'src/workout/models';
import { ExerciceContextProvider, useExerciceContext } from '../../providers/exercice';
import { SerieContextProvider, useSerieContext } from '../../providers/serie';
import { SerieTimer } from './timer';
import { useWorkoutContext } from 'src/workout/providers/workout';

function useSelect(id: string) {
  const select = useWorkoutContext().select.serie;
  return () => select(id);
}

function SerieInfo() {
  const { exercice } = useExerciceContext();
  const { serie } = useSerieContext();
  const index = exercice.result.findIndex(result => result === serie.id);
  const onClick = useSelect(serie.id);
  const langage = useLangage();
  return (
    <ListGroupItem onClick={onClick}>
      <FlexView wrap>
        <FlexView grow>
          {langage.serie.label} {index + 1}
        </FlexView>
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
  const { serie } = useSerieContext();
  return serie.hasState('RESTING') ? <Icon icon={'hourglass'} far /> : <Icon icon={'clock'} far />;
}
function WeightDetail() {
  const { serie } = useSerieContext();
  return (
    <FlexView width={50} hAlignContent="right" vAlignContent="center">
      {serie.weight}
      &nbsp;
      <Icon icon={'dumbbell'} />
    </FlexView>
  );
}
function RepetitionsDetail() {
  const { serie } = useSerieContext();
  return (
    <FlexView width={50} hAlignContent="right" vAlignContent="center">
      {serie.repetitions}
      &nbsp;
      <Icon icon={'redo'} />
    </FlexView>
  );
}

///

export function SerieItem({ serie, exercice }: { serie?: Serie; exercice?: Exercice }) {
  return serie && exercice ? (
    <ExerciceContextProvider exercice={exercice}>
      <SerieContextProvider serie={serie}>
        <SerieInfo />
      </SerieContextProvider>
    </ExerciceContextProvider>
  ) : null;
}
