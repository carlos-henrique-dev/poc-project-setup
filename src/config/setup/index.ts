import { readManifests } from './read-manifests'
import { validateProperties } from './validate-properties'
import { validateManifest } from './validate-manifest'
import { buildMenu } from './build-menu'
import { buildRoutes } from './build-routes'

interface Params {
  rootPath: string
}

const PATTERN = 'manifest.ts'

export const setup = async (params: Params) => {
  const { rootPath } = params

  const manifests = await readManifests({ rootPath, pattern: PATTERN })

  manifests.forEach((manifest) => {
    validateManifest(manifest)

    const properties: [key: string, value: any][] = Object.entries(manifest)

    properties.forEach(([key, value]) => validateProperties[key as keyof typeof validateProperties]?.(value, manifest))
  })

  let menu = buildMenu(manifests)
  let routes = buildRoutes(manifests)

  return { menu, routes }
}
