import { StructureUpdater, Structure } from 'src/models/structures';

export function doStructureStart(structure: Structure) {
  structure.state = 'ONGOING';
  structure.start = Date.now();
}
export function doStructureStop(structure: Structure) {
  structure.state = 'DONE';
  structure.stop = Date.now();
}
export function doStructureUpdate(structure: Structure, updater: StructureUpdater) {
  if (structure.id === updater.id) Object.assign(structure, updater);
}
