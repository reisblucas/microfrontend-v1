// navigation map - Contract - should be shared by the host and use it in MF childs
export interface Navlinks {
  href: string
  name: string
}

export const navlinks: Navlinks[] = [
  {
    href: '/info',
    name: 'Info'
  },
  {
    href: '/client-profile',
    name: 'Client Profile'
  },
  {
    href: '/Shop',
    name: 'Shop'
  }
]
