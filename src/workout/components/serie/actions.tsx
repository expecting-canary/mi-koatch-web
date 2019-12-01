import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import FlexView from 'react-flexview/lib';
import { useInterval } from 'src/common/useInterval';
import { UseWorkout } from 'src/workout/state';
import { IExercice, ISerie } from 'src/workout/types';

export function SerieAction({ serie }: { serie: ISerie }) {
  switch (serie.state) {
    case 'ONGOING':
      return <RestButton />;
    case 'RESTING':
      return <RestWrapper serie={serie} />;
  }
  return null;
}

function RestButton() {
  const useRest = UseWorkout.dispatch.rest();
  return <Button onClick={useRest}>Fin Série - Début Repos</Button>;
}

function RestWrapper({ serie }: { serie: ISerie }) {
  const stop = useNext();
  return (
    <FlexView column>
      <Button onClick={stop}>Fin Repos</Button>
      <RestActions serie={serie} />
    </FlexView>
  );
}

function getSecondes(date: Date) {
  return Math.floor((Date.now() - date.getTime()) / 1000);
}

function useRestTimer(serie: ISerie) {
  const [rest, setRest] = useState(getSecondes(serie.rest));
  useInterval(() => setRest(getSecondes(serie.rest)), 20);
  return rest;
}

function RestActions({ serie }: { serie: ISerie }) {
  const exercice = UseWorkout.selector.exercice.ongoing() as IExercice;
  const rest = useRestTimer(serie);
  return (
    <FlexView>
      {RestActionButton(rest, exercice.rest, 15)}
      {RestActionButton(rest, exercice.rest, 10)}
      {RestActionButton(rest, exercice.rest, 5)}
    </FlexView>
  );
}

function useNext(active = true, delay = 0) {
  const next = UseWorkout.dispatch.next();
  if (active) return () => next(delay);
}

function RestActionButton(rest: number, defaultRest: number, delta: number) {
  const trigger = UseWorkout.selector.delay();
  const selected = trigger.delay === delta;
  const active = defaultRest - rest <= delta;
  const next = useNext(active, delta);

  const time = selected ? delta - getSecondes(trigger.start) : delta;

  return (
    <FlexView grow column>
      <Button onClick={next} variant={selected ? 'success' : 'secondary'} disabled={!active}>
        {time}s
      </Button>
    </FlexView>
  );
}
