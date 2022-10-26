import { EMenuGroup, ModuleManifest, Permissions } from '../../../interfaces'

export const manifest: ModuleManifest = {
  name: '@products-management',
  isPrivate: true,
  permissions: [Permissions.CREATE, Permissions.UPDATE, Permissions.READ, Permissions.DELETE],
  route: {
    path: '/categories/management',
  },
  menu: {
    key: '@categories-management',
    name: 'Categories',
    group: EMenuGroup.MANAGEMENT,
    position: 0,
    permissions: [Permissions.CREATE, Permissions.UPDATE, Permissions.READ, Permissions.DELETE],
  },
}
