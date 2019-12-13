import {
  ID,
  IExerciceData,
  IStructureBase,
  IStructureDataBase,
  STRUCTURE_ROTATION,
} from 'src/models'

export interface IStructureRotationData extends IStructureDataBase {
  type: typeof STRUCTURE_ROTATION

  content: IExerciceData[]
  series: number
  rest: {
    short: number
    long: number,
  }
}

export type IStructureRotationResult = Array<[ Array<[ ID, number ]>, number ]>

export type IStructureRotation = IStructureRotationData &
  IStructureBase<IStructureRotationResult>
