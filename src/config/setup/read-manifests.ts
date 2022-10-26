import fs from 'fs'
import path from 'path'
import { ModuleManifest } from '../../interfaces'

interface Params {
  rootPath: string
  pattern: string
}

async function readFromDirectory(startPath: string, filter: string, manifests: ModuleManifest[] = []) {
  if (!fs.existsSync(startPath)) {
    console.log('no directory or file found for this start path => ', startPath)
    return []
  }

  const files = fs.readdirSync(startPath)

  for (const file of files) {
    const filename = path.join(startPath, file)
    const fileStatus = fs.lstatSync(filename)

    if (fileStatus.isDirectory()) {
      readFromDirectory(filename, filter, manifests)
    }

    if (path.basename(filename) === filter) {
      console.log('-- found: ', filename)

      const relativePathToFile = path.relative(__dirname, filename)

      const manifestFile: { manifest: ModuleManifest } = require(relativePathToFile)

      manifests.push(manifestFile.manifest)
    }
  }

  return manifests
}

export const readManifests = async (params: Params) => {
  console.log('reading files...')

  const { rootPath, pattern } = params

  const result = await readFromDirectory(rootPath, pattern)

  return result
}
