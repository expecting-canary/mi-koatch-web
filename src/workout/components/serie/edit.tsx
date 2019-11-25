import React from 'react';
import { NumberPicker } from '../common/picker/number';
import { useDispatch } from 'react-redux';
import { StateDispatch } from '../../redux/store';

export function SerieEdit({ state }: { state: Serie.Type }) {
  const dispatch = useDispatch() as StateDispatch;
  const setWeight = (weight: number) => dispatch({ type: 'SERIE_UPDATE_WEIGHT', payload: weight });
  const setRepetitions = (repetitions: number) => dispatch({ type: 'SERIE_UPDATE_REPETITIONS', payload: repetitions });
  return (
    <div>
      <div>
        Poids :
        <NumberPicker value={state.weight} onChange={setWeight} />
      </div>
      <div>
        Répétitions :
        <NumberPicker value={state.repetitions} onChange={setRepetitions} />
      </div>
    </div>
  );
}
