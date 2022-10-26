import { EMenuGroup, ModuleManifest, Permissions } from '../../../interfaces'

export const manifest: ModuleManifest = {
  name: '@categories-management',
  isPrivate: true,
  permissions: [Permissions.CREATE, Permissions.UPDATE, Permissions.READ, Permissions.DELETE],
  route: {
    path: '/categories/management',
  },
  menu: {
    key: '@categories-management',
    name: 'Categories',
    group: EMenuGroup.MANAGEMENT,
    position: 1,
    permissions: [Permissions.CREATE, Permissions.UPDATE, Permissions.READ, Permissions.DELETE],
  },
}
