import { EMenuGroup, ModuleManifest, Permissions } from '../../../interfaces'

export const manifest: ModuleManifest = {
  name: '@products-list',
  isPrivate: true,
  permissions: [Permissions.READ],
  route: {
    path: '/products/list',
  },
  menu: {
    key: '@products-list',
    name: 'products',
    group: EMenuGroup.LISTING,
    position: 0,
    permissions: [Permissions.READ],
  },
}
