import { ITemplate, ITemplateUpdater } from 'src/models'

export function templateDoUpdate( template: ITemplate, updater: ITemplateUpdater ) {
  Object.assign( template, updater )
}
