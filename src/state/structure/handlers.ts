import { StructureUpdater, Structure } from 'src/models/structures';

export function structureDoStart(structure: Structure) {
  structure.state = 'ONGOING';
  structure.start = Date.now();
}
export function structureDoStop(structure: Structure) {
  structure.state = 'DONE';
  structure.stop = Date.now();
}
export function structureDoUpdate(structure: Structure, updater: StructureUpdater) {
  if (structure.id === updater.id) Object.assign(structure, updater);
}
