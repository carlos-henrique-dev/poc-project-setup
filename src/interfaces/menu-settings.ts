import { Permissions } from './permissions'

export enum EMenuGroup {
  LISTING,
  MANAGEMENT,
}

export interface MenuSettings {
  key: `@${string}`
  name: string
  group?: EMenuGroup
  position: number
  permissions?: Permissions[]
}
