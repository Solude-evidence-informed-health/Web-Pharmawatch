import { Icons } from 'bold-ui'

type SidebarItem = {
  href: string
  label: string
  active: boolean
  icon: Icons
}

export function getItems(pathname: string): SidebarItem[] {
  return [
    {
      href: '/',
      label: 'Dashboard',
      active: pathname === '/',
      icon: 'houseOutline',
    },
    {
      href: '/medicines',
      label: 'Medicamentos',
      active: pathname === '/medicines',
      icon: 'pillOutline',
    },
  ]
}
