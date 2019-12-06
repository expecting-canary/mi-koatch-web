import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import FlexView from 'react-flexview/lib';
import { useLangage } from 'src/common/langage/context';
import { useInterval } from 'src/common/useInterval';
import { UseWorkout } from 'src/workout/state';
import { useExerciceContext } from '../exercice/context';
import { useSerieContext } from './context';
import { flatSwitch } from 'src/util';

const cases = {
  ONGOING: () => <RestButton />,
  RESTING: () => <RestWrapper />
};

export function SerieAction() {
  const { serie } = useSerieContext();
  return flatSwitch(serie.state, cases, null);
}

function RestButton() {
  const text = useLangage();
  const { rest } = useSerieContext();
  return <Button onClick={rest}>{text.serie.rest}</Button>;
}

function RestWrapper() {
  const text = useLangage();
  const stop = useNext();
  return (
    <FlexView column>
      <Button onClick={stop}>{text.serie.next}</Button>
      <RestActions />
    </FlexView>
  );
}

function getSecondes(date: Date) {
  return Math.floor((Date.now() - date.getTime()) / 1000);
}

function useRestTimer() {
  const { serie } = useSerieContext();
  const [rest, setRest] = useState(getSecondes(serie.rest));
  useInterval(() => setRest(getSecondes(serie.rest)), 20);
  return rest;
}

function RestActions() {
  return (
    <FlexView>
      <RestActionButton delay={15} />
      <RestActionButton delay={10} />
      <RestActionButton delay={5} />
    </FlexView>
  );
}

function useNext(active = true, delay = 0) {
  const { next } = useSerieContext();
  if (active) return () => next(delay);
}

function RestActionButton({ delay }: { delay: number }) {
  const rest = useRestTimer();
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
