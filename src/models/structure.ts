import { Exercice } from './serie';
import { ExerciceTypes } from './types/all';

export type StructureState = 'TODO' | 'ONGOING' | 'DONE';

interface BasicStructure {
  id: string;

  state: StructureState;

  type: string;

  start: number;
  stop: number;
}

interface RestStructure {
  type: 'REST';

  serie: Exercice['id'];
}

interface SerieStructure {
  type: 'SERIE';

  exercice: ExerciceTypes;
  serie: Exercice['id'];
}

export type Structures = (RestStructure | SerieStructure) & BasicStructure;
