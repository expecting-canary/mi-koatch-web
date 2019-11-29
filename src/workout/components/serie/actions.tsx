import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import FlexView from 'react-flexview/lib';
import { useInterval } from 'src/common/useInterval';
import { ISerie } from 'src/workout/models';
import { IExercice } from 'src/workout/models/models';
import { Workout } from 'src/workout/models/workout';
import { useWorkoutDispatch, useWorkoutSelector } from 'src/workout/redux/store';
import { WorkoutHook } from 'src/workout/redux/hooks';

export function SerieAction({ serie }: { serie: ISerie }) {
  const dispatch = useWorkoutDispatch();
  switch (serie.state) {
    case 'ONGOING':
      const rest = () => dispatch({ type: 'SERIE_REST' });
      return <Button onClick={rest}>Fin Série - Début Repos</Button>;
    case 'RESTING':
      return <RestWrapper serie={serie} />;
  }
  return null;
}

function RestWrapper({ serie }: { serie: ISerie }) {
  const stop = WorkoutHook.rest();
  return (
    <FlexView column>
      <Button onClick={stop}>Fin Repos</Button>
      <RestActions serie={serie} />
    </FlexView>
  );
}

function getRest(serie: ISerie) {
  return Math.floor((Date.now() - serie.rest.getTime()) / 1000);
}

function useRestTimer(serie: ISerie) {
  const [rest, setRest] = useState(getRest(serie));
  useInterval(() => setRest(getRest(serie)), 20);
  return rest;
}

function RestActions({ serie }: { serie: ISerie }) {
  const exercice = useWorkoutSelector(Workout.get.exercice.ongoing) as IExercice;
  const rest = useRestTimer(serie);
  return (
    <FlexView>
      {RestActionButton(rest, exercice.rest, 15)}
      {RestActionButton(rest, exercice.rest, 10)}
      {RestActionButton(rest, exercice.rest, 5)}
    </FlexView>
  );
}

function useNext(active: boolean) {
  const dispatch = useWorkoutDispatch();
  if (active) return () => dispatch({ type: 'NEXT' });
}

function RestActionButton(rest: number, defaultRest: number, delta: number) {
  const active = defaultRest - rest < delta;
  const next = useNext(active);
  return (
    <FlexView grow column>
      <Button onClick={next} variant={'outline-secondary'} disabled={active}>
        {delta}s
      </Button>
    </FlexView>
  );
}
