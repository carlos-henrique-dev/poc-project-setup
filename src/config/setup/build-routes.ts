import { withPermission } from '../../hocs'
import { RouteItem, ModuleManifest } from '../../interfaces'

export const buildRoutes = (manifests: ModuleManifest[]) => {
  const routeItems = manifests.reduce((accumulator, { route, isPrivate, name, permissions = [] }) => {
    const routeItem = { name, path: route.path }

    let element = route.element

    if (isPrivate) {
      element = withPermission({ element, permissions })
    }

    accumulator.push({ ...routeItem, element })

    return accumulator
  }, [] as RouteItem[])

  const routes = Object.entries(routeItems).map(([, value]) => value)

  return routes
}
