import { MenuSettings, ModuleManifest, Permissions } from '../../interfaces'

const validatePermissions = (permissions: Permissions[], manifest?: ModuleManifest) => {
  if (permissions && !permissions.length) {
    console.error(`In ${manifest?.name}: Field "permissions" cannot be empty. Either provide a value or remove the property`)

    throw new Error('Invalid Manifest')
  }
}

export const validateProperties: { [key in keyof ModuleManifest]?: (value: any, manifest?: ModuleManifest) => void | Error } = {
  permissions: validatePermissions,
  menu: (menu: MenuSettings, manifest?: ModuleManifest) => {
    if (manifest?.isPrivate) validatePermissions(menu.permissions || [], manifest)
  },
}
