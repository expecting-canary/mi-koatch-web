import { IExercice, IExerciceData } from './exercices'
import { IStructure, IStructureData } from './structures'

export type IItem = IStructure | IExercice;

export type IItemDate = IStructureData | IExerciceData;

export * from './exercices'
export * from './structures'
export * from './progress'
export * from './base'
