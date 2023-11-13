// navigation map - Contract - should be shared by the host and use it in MF childs
interface NavbarLinks {
  href: string
  name: string
}

export const nav: NavbarLinks[] = [
  {
    href: '/info',
    name: 'Info'
  },
  {
    href: '/members',
    name: 'Members'
  },
  {
    href: '/Shop',
    name: 'Shop'
  }
]
