import { EMenuGroup, ModuleManifest, Permissions } from '../../../interfaces'

export const manifest: ModuleManifest = {
  name: '@categories-list',
  isPrivate: true,
  permissions: [Permissions.READ],
  route: {
    path: '/categories/list',
  },
  menu: {
    key: '@categories-list',
    name: 'Categories',
    group: EMenuGroup.LISTING,
    position: 1,
    permissions: [Permissions.READ],
  },
}
