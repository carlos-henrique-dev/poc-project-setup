import { ModuleManifest } from '../../interfaces'

export const validateManifest = (manifest: ModuleManifest) => {
  if (manifest.isPrivate && !manifest.permissions) {
    console.error(`In ${manifest.name}: If the module is private, you must provide the necessary permissions to access it!`)

    throw new Error('Invalid manifest')
  }
}
