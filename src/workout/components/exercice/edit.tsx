import React from 'react';
import { useDispatch } from 'react-redux';
import { IExercice } from '../../models/exercice.type';
import { StateDispatch } from '../../redux/store';
import { NumberPicker } from '../common/picker/number';

export function ExerciceEdit({ exercice }: { exercice: IExercice }) {
  const dispatch = useDispatch() as StateDispatch;

  const setWeight = (weight: number) => dispatch({ type: 'EXERCICE_UPDATE_WEIGHT', payload: weight });
  const setRepetitions = (repetitions: number) =>
    dispatch({ type: 'EXERCICE_UPDATE_REPETITIONS', payload: repetitions });
  const setRest = (rest: number) => dispatch({ type: 'EXERCICE_UPDATE_REST', payload: rest });
  const setSerie = (series: number) => dispatch({ type: 'EXERCICE_UPDATE_SERIES', payload: series });

  return (
    <div>
      <div>
        Séries :
        <NumberPicker value={exercice.series} onChange={setSerie} />
      </div>
      <div>
        Repos :
        <NumberPicker value={exercice.rest} onChange={setRest} />
      </div>
      <div>
        Poids :
        <NumberPicker value={exercice.weight} onChange={setWeight} />
      </div>
      <div>
        Répétitions :
        <NumberPicker value={exercice.repetitions} onChange={setRepetitions} />
      </div>
    </div>
  );
}
