import { IStructure, IStructureUpdater } from 'src/models';

export function structureDoStart( structure: IStructure ) {
  structure.state = "ONGOING";
  structure.start = Date.now();
}
export function structureDoStop( structure: IStructure ) {
  structure.state = "DONE";
  structure.stop = Date.now();
}
export function structureDoUpdate(
  structure: IStructure,
  updater: IStructureUpdater,
) {
  if( structure.id === updater.id ) { Object.assign( structure, updater ); }
}
