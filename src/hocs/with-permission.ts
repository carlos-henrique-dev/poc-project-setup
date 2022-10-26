import { requestUserPermissions } from '../infra'
import { Permissions } from '../interfaces'

type Params = {
  element: any
  permissions: Permissions[]
}

export const withPermission = ({ element, permissions }: Params) => {
  if (!permissions.length) return element

  /* Aqui simula uma request na api, 
  mas o ideal seria uma verificação no auth context, local storage ou algo semelhante */
  const userPermissions = requestUserPermissions()

  const hasAllRequiredPermissions = userPermissions.every((userPermission) => permissions.includes(userPermission))

  return hasAllRequiredPermissions ? element : null
}
