import { EMenuGroup, ModuleManifest, Permissions } from '../../../interfaces'

export const manifest: ModuleManifest = {
  name: '@costumers-list',
  isPrivate: true,
  permissions: [Permissions.READ],
  route: {
    path: '/costumers/list',
  },
  menu: {
    key: '@costumers-list',
    name: 'Costumers',
    group: EMenuGroup.LISTING,
    position: 0,
    permissions: [Permissions.READ],
  },
}
