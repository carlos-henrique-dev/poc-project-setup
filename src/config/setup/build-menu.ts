import { withPermission } from '../../hocs'
import { EMenuGroup, MenuItem, ModuleManifest } from '../../interfaces'

const MenuGroups = {
  [EMenuGroup.LISTING]: {
    label: 'Listing',
    position: 2,
  },
  [EMenuGroup.MANAGEMENT]: {
    label: 'Management',
    position: 1,
  },
}

type MenuGroups = { [key: string]: { label: string; position: number; items: MenuItem[] } }

const InitialMenuGroups: MenuGroups = {
  [MenuGroups[EMenuGroup.LISTING].label]: {
    label: MenuGroups[EMenuGroup.LISTING].label,
    position: MenuGroups[EMenuGroup.LISTING].position,
    items: [],
  },
  [MenuGroups[EMenuGroup.MANAGEMENT].label]: {
    label: MenuGroups[EMenuGroup.MANAGEMENT].label,
    position: MenuGroups[EMenuGroup.MANAGEMENT].position,
    items: [],
  },
}

export const buildMenu = (manifests: ModuleManifest[]) => {
  const menuGroups = manifests.reduce((accumulator, { menu }) => {
    let menuItem = { key: menu.key, name: menu.name, position: menu.position }

    if (menu.permissions?.length) {
      menuItem = withPermission({ element: menuItem, permissions: menu.permissions })
    }

    if (menu.group === undefined && !accumulator[menu.name]) {
      accumulator[menu.name] = { label: menu.name, position: menu.position, items: [menuItem] }
      return accumulator
    }

    if (menu.group === undefined && accumulator[menu.name]) {
      accumulator[menu.name].items.push(menuItem)
      return accumulator
    }

    const key = MenuGroups[menu.group as keyof typeof MenuGroups].label

    if (menu.group !== undefined && accumulator[key]) {
      accumulator[key].items.push(menuItem)
      return accumulator
    }

    return accumulator
  }, InitialMenuGroups)

  const menu = Object.entries(menuGroups)
    .sort(([, { position: positionA }], [, { position: positionB }]) => {
      return positionA - positionB
    })
    .map(([, value]) => value)

  return menu
}
