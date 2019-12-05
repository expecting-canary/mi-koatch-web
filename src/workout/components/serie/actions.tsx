import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import FlexView from 'react-flexview/lib';
import { useLangage } from 'src/common/langage/context';
import { useInterval } from 'src/common/useInterval';
import { UseWorkout } from 'src/workout/state';
import { useExerciceContext } from '../exercice/context';
import { useSerieContext } from './context';
import { useSessionContext } from '../session/context';

export function SerieAction() {
  const { serie } = useSerieContext();
  switch (serie.state) {
    case 'ONGOING':
      return <RestButton />;
    case 'RESTING':
      return <RestWrapper />;
  }
  return null;
}

function RestButton() {
  const text = useLangage();
  const useRest = UseWorkout.dispatch.rest();
  return <Button onClick={useRest}>{text.serie.rest}</Button>;
}

function RestWrapper() {
  const text = useLangage();
  const next = useNext();
  return (
    <FlexView column>
      <Button onClick={next}>{text.serie.next}</Button>
      <RestActions />
    </FlexView>
  );
}

function getSecondes(date: Date) {
  return Math.floor((Date.now() - date.getTime()) / 1000);
}

function useRestDelay() {
  const { serie } = useSerieContext();
  const [rest, setRest] = useState(getSecondes(serie.rest));
  useInterval(() => setRest(getSecondes(serie.rest)), 20);
  return rest;
}

function RestActions() {
  return (
    <FlexView>
      <RestActionButton delay={15} />
      <RestActionButton delay={15} />
      <RestActionButton delay={15} />
    </FlexView>
  );
}

function useNext(active = true, delay: 0 | 5 | 10 | 15 = 0) {
  const { next } = useSessionContext();
  if (active) return next[delay];
}

function RestActionButton({ delay }: { delay: 5 | 10 | 15 }) {
  const rest = useRestDelay();
  const exercice = useExerciceContext();
  const trigger = UseWorkout.selector.delay();
  const selected = trigger.delay === delay;
  const active = exercice.rest - rest <= delay;
  const next = useNext(active, delay);

  const time = selected ? delay - getSecondes(trigger.start) : delay;

  return (
    <FlexView grow column>
      <Button onClick={next} variant={selected ? 'success' : 'secondary'} disabled={!active}>
        {time}s
      </Button>
    </FlexView>
  );
}
