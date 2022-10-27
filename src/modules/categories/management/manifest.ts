import { CategoriesManagement } from '.'
import { EMenuGroup, ModuleManifest, Permissions } from '../../../interfaces'

export const manifest: ModuleManifest = {
  name: '@categories-management',
  isPrivate: true,
  permissions: [Permissions.CREATE, Permissions.READ],
  route: {
    path: '/categories/management',
	element: CategoriesManagement
  },
  menu: {
    key: '@categories-management',
    name: 'Categories',
    group: EMenuGroup.MANAGEMENT,
    position: 1,
    permissions: [Permissions.CREATE, Permissions.READ],
  },
}
