/* 
-> ler arquivos X
-> extrair os manifestos X
-> validar os manifestos
-> montar objetos
*/

import { readManifests } from './read-manifests'
import { validateProperties } from './validate-properties'
import { validateManifest } from './validate-manifest'

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

  console.log({ manifests })
}
