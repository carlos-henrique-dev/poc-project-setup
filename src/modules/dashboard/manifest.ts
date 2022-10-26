import { EMenuGroup, ModuleManifest, Permissions } from '../../interfaces'

export const manifest: ModuleManifest = {
  name: '@dashboard',
  route: {
    path: '/dashboard',
  },
  menu: {
    key: '@dashboard',
    name: 'Dashboard',
    position: 0,
  },
}
