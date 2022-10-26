import { MenuSettings } from './menu-settings'
import { Permissions } from './permissions'
import { RouteSettings } from './route-settings'

export interface ModuleManifest {
  name: `@${string}`
  isPrivate?: boolean
  permissions?: Permissions[]
  route: RouteSettings
  menu: MenuSettings
}
