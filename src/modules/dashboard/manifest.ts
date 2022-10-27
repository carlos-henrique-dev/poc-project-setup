import { Dashboard } from '.'
import { EMenuGroup, ModuleManifest, Permissions } from '../../interfaces'

export const manifest: ModuleManifest = {
  name: '@dashboard',
  route: {
    path: '/dashboard',
	element: Dashboard
  },
  menu: {
    key: '@dashboard',
    name: 'Dashboard',
    position: 0,
  },
}
